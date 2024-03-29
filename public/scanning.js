const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const capture = document.getElementById('captureBtn')

window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});
  

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => 
{
    webcamElement.srcObject = stream;
    console.log("webcam started");
}).catch(err => {
    console.log(err);
});

capture.addEventListener('click', function () {
    document.getElementById("loader").style.display = "block";

    const context = canvasElement.getContext('2d')
    context.drawImage(webcamElement, 0, 0, canvasElement.width, canvasElement.height)
    webcamElement.pause()
    snapSoundElement.play()

    console.log("start ocr")

    Tesseract.recognize(canvasElement, 'eng', { 
        logger: m => console.log(m) }) 
        .then(({ data: { text } }) => {
        console.log(text)
        localStorage.setItem('ocr', text);
        window.location.href = 'translating.html';
    })
    /*
    $.get("/ocr", {
        imageUrlData: canvasElement.value
    }, function(result) {
        console.log(result);
        localStorage.setItem('ocr', result);
    }, false);
    */
})
