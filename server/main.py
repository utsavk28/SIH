import os
import cv2
import numpy as np
import pytesseract as pt
import matplotlib.pyplot as plt
# import easyocr


pt.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

INPUT_WIDTH = 640
INPUT_HEIGHT = 640

net = cv2.dnn.readNetFromONNX('./data/model/yolo_v5.onnx')
net.setPreferableBackend(cv2.dnn.DNN_BACKEND_OPENCV)
net.setPreferableTarget(cv2.dnn.DNN_TARGET_CPU)


def get_detections(img, net):
    image = img.copy()
    row, col, d = image.shape

    max_rc = max(row, col)
    input_image = np.zeros((max_rc, max_rc, 3), dtype=np.uint8)
    input_image[0:row, 0:col] = image

    blob = cv2.dnn.blobFromImage(
        input_image, 1/255, (INPUT_WIDTH, INPUT_HEIGHT), swapRB=True, crop=False)
    net.setInput(blob)
    preds = net.forward()
    detections = preds[0]

    return input_image, detections


def non_maximum_supression(input_image, detections):
    boxes = []
    confidences = []

    image_w, image_h = input_image.shape[:2]
    x_factor = image_w/INPUT_WIDTH
    y_factor = image_h/INPUT_HEIGHT

    for i in range(len(detections)):
        row = detections[i]
        confidence = row[4]
        if confidence > 0.4:
            class_score = row[5]
            if class_score > 0.25:
                cx, cy, w, h = row[0:4]

                left = int((cx - 0.5*w)*x_factor)
                top = int((cy-0.5*h)*y_factor)
                width = int(w*x_factor)
                height = int(h*y_factor)
                box = np.array([left, top, width, height])

                confidences.append(confidence)
                boxes.append(box)

    boxes_np = np.array(boxes).tolist()
    confidences_np = np.array(confidences).tolist()

    index = cv2.dnn.NMSBoxes(boxes_np, confidences_np, 0.25, 0.45).flatten()

    return boxes_np, confidences_np, index


def drawings(image, boxes_np, confidences_np, index):
    labels = []
    for ind in index:
        x, y, w, h = boxes_np[ind]
        bb_conf = confidences_np[ind]
        conf_text = 'plate: {:.0f}%'.format(bb_conf*100)
        license_text = extract_text(image, boxes_np[ind])
        labels.append(license_text)

        cv2.rectangle(image, (x, y), (x+w, y+h), (255, 0, 255), 2)
        cv2.rectangle(image, (x, y-30), (x+w, y), (255, 0, 255), -1)
        cv2.rectangle(image, (x, y+h), (x+w, y+h+30), (0, 0, 0), -1)

        cv2.putText(image, conf_text, (x, y-10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 1)
        cv2.putText(image, license_text, (x, y+h+27),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 1)

    return image, labels


def yolo_predictions(img, net):
    input_image, detections = get_detections(img, net)
    boxes_np, confidences_np, index = non_maximum_supression(
        input_image, detections)
    result_img, labels = drawings(img, boxes_np, confidences_np, index)
    return result_img, labels


def extract_text(image, bbox):
    x,y,w,h = bbox
    roi = image[y:y+h, x:x+w]
    
    gray = cv2.cvtColor(roi, cv2.COLOR_RGB2GRAY)
    thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
    thresh = cv2.cvtColor(thresh, cv2.COLOR_BGR2RGB)
    plt.imshow(thresh)
    plt.show()

    # gausBlur = cv2.GaussianBlur(thresh, (1,1),0) 
    # cv2.imshow('Gaussian Blurring', gausBlur)
    # cv2.waitKey(0)

    # bilFilter = cv2.bilateralFilter(roi,9,75,75)
    # cv2.imshow('Bilateral Filtering', bilFilter)
    # cv2.waitKey(0)
    
    if 0 in roi.shape:
        return ''
    
    else:
        text = pt.image_to_string(thresh, config='-c tessedit_char_whitelist=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ --psm 7 --oem 1')
        text = text.strip()
        text = text.strip('?')
        text.replace('?','').replace('\n','')
        print(text)
        return text


def main(name, path, type, save=False):
    if type == 'img':
        img = cv2.imread(path)
        try:
            res, labels = yolo_predictions(img, net)
            if save:
                cv2.imwrite(f"./data/images/output/{name}.png", res)
            return {
                "Labels": labels
            }
        except Exception as e:
            return {
                "error": "Empty Response"
            }
    elif type == 'vid':
        cap = cv2.VideoCapture(path)
        while True:
            isTrue, img = cap.read()

            if not isTrue:
                break

            try:
                res, labels = yolo_predictions(img, net)
                return {
                    "Labels": labels
                }
            except Exception as e:
                return {
                    "error": "Empty Response"
                }


for i in range(1, 6):
    print(main(f'{i}', f'./data/images/input/{i}.jpeg', 'img', save=True))
