
const playButton = document.getElementById('client_button');

playButton.addEventListener('click', function () {
    var imageUrl = document.getElementById("imageToOCR").value;
    Tesseract.recognize(
        //"https://tesseract.projectnaptha.com/img/eng_bw.png",
        imageUrl,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        document.getElementById("output_paragraph").innerHTML = text;
        console.log(text);
    })

}, false);
