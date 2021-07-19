var imageUrl = localStorage.getItem("picUrl");

window.addEventListener('load', function(){
    Tesseract.recognize(
        /*"https://tesseract.projectnaptha.com/img/eng_bw.png",*/
        imageUrl,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        document.getElementById("output_container").innerHTML += "<p>" + text + "</p>";
        console.log(text);
    })
}, false);
