from flask import Flask,request
from main import main
app = Flask(__name__)

@app.route('/model',methods=['GET'])
def run_model():
    args = request.args
    name=args.get("name", default="", type=str)
    path=args.get("path", default="", type=str)
    type=args.get("type", default="", type=str)

    return main(name,path,type,)

@app.route('/',methods=['GET'])
def hello() :
    return "Hello World"

# './data/video/input/mumbai.mp4'