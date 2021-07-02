
const playButton2 = document.getElementById('server_button');

playButton2.addEventListener('click', function () {
    console.log("start")
    var imageUrl = document.getElementById("imageToOCR_server").value;
    $.get("/ocr", {imageUrlData: imageUrl}, function(result) {
		console.log(result);
	    });
}, false);

