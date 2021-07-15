
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

const camDisplay = document.getElementById('btn3');
camDisplay.addEventListener('click', function(){
    webcam.start()
    .then(result => {
        console.log("webcam started");
    })
    .catch(err => {
        console.log(err);
    });
}, false);



/*const capture = document.getElementById('btn4');
capture.addEventListener('click', function () {
    
    let picture = webcam.snap();
    document.querySelector('#download-photo').href = picture;
    webcam.stop();
    document.getElementById('webcam').style.display = "none";

}, false);

const translate = document.getElementById('btn5');
translate.addEventListener('click', function(){
    var imageUrl = document.getElementById('download-photo').value;
    Tesseract.recognize(
        imageUrl,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        document.getElementById("output_container").innerHTML += "<p>" + text + "</p>";
        console.log(text);
    })
}, false);*/

