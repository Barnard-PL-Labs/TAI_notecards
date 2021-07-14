const switcher = document.getElementById('btn');
var counter = 0;
var canvas = document.getElementById('canvas');
var picture = document.getElementById('picture');
var liveVideo = document.getElementById('camera');

switcher.addEventListener('click', function () {
    counter++;


    if (counter == 1) {
        document.getElementById('line1').innerHTML = "I don't know what a fruit is. <br> Can you show me some examples?";
        document.getElementById('line2').innerHTML = "You can scan your examples through my webcam.";
        document.getElementById('btn').innerHTML = "Begin scanning →";
    }

    if (counter == 2) {

        document.getElementById('line1').innerHTML = "Take a picture: ";
        document.getElementById('btn').innerHTML = "Take photo"

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ liveVideo: true })
                .then(function (stream) {
                    liveVideo.srcObject = stream;
                })
                .catch(function (error) {
                    console.log("I cannot access your webcam");
                });
        }
    }
    if (counter == 3) {
        takePicture();

    }

}, false);

function takePicture(){
    
    var ctx = canvas.getContextOf('2d');
    ctx.drawImage(liveVideo, 0, 0);
    var image_data= canvas.toDataURL("image_data/png");
    picture.setAttribute('source', image_data);

}