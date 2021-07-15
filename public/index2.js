
const switcher = document.getElementById('btn');
var counter = 0;
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);




switcher.addEventListener('click', function () {
    counter++;


    if (counter == 1) {
        document.getElementById('line1').innerHTML = "I don't know what a fruit is. <br> Can you show me some examples?";
        document.getElementById('line2').innerHTML = "You can scan your examples through my webcam.";
        document.getElementById('btn').innerHTML = "Begin scanning →";
    }

    if (counter == 2) {
        document.getElementById('btn').innerHTML = "Capture →";
        webcam.start()
            .then(result => {
                console.log("webcam started");
            })
            .catch(err => {
                console.log(err);
            });

    }
    if (counter == 3) {
        document.getElementById('btn').innerHTML = "Translate →";
        let picture = webcam.snap();
        picture.transform = "scaleX(-1)";

        document.querySelector('#download-photo').href = picture;
        webcam.stop();
        document.getElementById('webcam').style.display = "none";

    }
    if (counter == 4) {
    
            var imageUrl = document.getElementById('download-photo').value;
            Tesseract.recognize(
                imageUrl,
                'eng',
                { logger: m => console.log(m) }
            ).then(({ data: { text } }) => {
                document.getElementById("output_container").innerHTML += "<p>" + text + "</p>";
                console.log(text);
            })

        
    }

}, false);

