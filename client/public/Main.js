/**
 * Drag and Drop File Uploading
 * Based on [Drag and Drop File Uploading]{@link https://css-tricks.com/drag-and-drop-file-uploading} by [Osvaldas Valutis]{@link http://osvaldas.info}
 * @namespace fileUpload
 */
 var fileUpload = (function($, window, document, undefined) {
	/**
	 * Defaults
	 */
	
	/**
	 * Init
	 */
	
	/**
	 * Config
	 */
})(jQuery, window, document);

/// ------------------------------------------------------------------------------------
/// ------------------------------------------------------------------------------------

(function($, window, document, undefined) {
	// feature detection for drag&drop upload

	var isAdvancedUpload = (function() {
		var div = document.createElement("div");
		return (
			("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
			"FormData" in window &&
			"FileReader" in window
		);
	})();

	// applying the effect for every form

	$(".box").each(function() {
		var $form = $(this),
			$input = $form.find('input[type="file"]'),
			$label = $form.find("label"),
			$errorMsg = $form.find(".box__error span"),
			$restart = $form.find(".box__restart"),
			droppedFiles = false,
			showFiles = function(files) {
				$label.text(
					files.length > 1
						? ($input.attr("data-multiple-caption") || "")
								.replace("{count}", files.length)
						: files[0].name
				);
			};

		// letting the server side to know we are going to make an Ajax request
		$form.append('<input type="hidden" name="ajax" value="1" />');

		// automatically submit the form on file select
		$input.on("change", function(e) {
			showFiles(e.target.files);

			$form.trigger("submit");
		});

		// drag&drop files if the feature is available
		if (isAdvancedUpload) {
			$form
				.addClass("has-advanced-upload") // letting the CSS part to know drag&drop is supported by the browser
				.on("drag dragstart dragend dragover dragenter dragleave drop", function(
					e
				) {
					// preventing the unwanted behaviours
					e.preventDefault();
					e.stopPropagation();
				})
				.on("dragover dragenter", function() //
				{
					$form.addClass("is-dragover");
				})
				.on("dragleave dragend drop", function() {
					$form.removeClass("is-dragover");
				})
				.on("drop", function(e) {
					droppedFiles = e.originalEvent.dataTransfer.files; // the files that were dropped
					showFiles(droppedFiles);

					$form.trigger("submit"); // automatically submit the form on file drop
				});
		}

		// if the form was submitted

		$form.on("submit", function(e) {
			// preventing the duplicate submissions if the current one is in progress
			if ($form.hasClass("is-uploading")) return false;

			$form.addClass("is-uploading").removeClass("is-error");

			if (isAdvancedUpload) {
				// ajax file upload for modern browsers
				e.preventDefault();

				// gathering the form data
				var ajaxData = new FormData($form.get(0));
				if (droppedFiles) {
					$.each(droppedFiles, function(i, file) {
						ajaxData.append($input.attr("name"), file);
					});
				}

				// ajax request
				$.ajax({
					url: $form.attr("action"),
					type: $form.attr("method"),
					data: ajaxData,
					dataType: "json",
					cache: false,
					contentType: false,
					processData: false,
					complete: function() {
						$form.removeClass("is-uploading");
					},
					success: function(data) {
						$form.addClass(data.success == true ? "is-success" : "is-error");
						if (!data.success) $errorMsg.text(data.error);
					},
					error: function() {
						alert("Error. Please, contact the webmaster!");
					}
				});
			} else {
				// fallback Ajax solution upload for older browsers
				var iframeName = "uploadiframe" + new Date().getTime(),
					$iframe = $(
						'<iframe name="' + iframeName + '" style="display: none;"></iframe>'
					);

				$("body").append($iframe);
				$form.attr("target", iframeName);

				$iframe.one("load", function() {
					var data = $.parseJSON($iframe.contents().find("body").text());
					$form
						.removeClass("is-uploading")
						.addClass(data.success == true ? "is-success" : "is-error")
						.removeAttr("target");
					if (!data.success) $errorMsg.text(data.error);
					$iframe.remove();
				});
			}
		});

		// restart the form if has a state of error/success

		$restart.on("click", function(e) {
			e.preventDefault();
			$form.removeClass("is-error is-success");
			$input.trigger("click");
		});

		// Firefox focus bug fix for file input
		$input
			.on("focus", function() {
				$input.addClass("has-focus");
			})
			.on("blur", function() {
				$input.removeClass("has-focus");
			});
	});
})(jQuery, window, document);



//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions
button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}
input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});
//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});
//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});
//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});
function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}