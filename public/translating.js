var imageUrl = localStorage.getItem("picUrl");
if (localStorage.getItem("notecards") == null){
    var tempArr =[];
} else {
   tempArr = JSON.parse(localStorage.getItem("notecards"));
}


window.addEventListener('load', function(){
    Tesseract.recognize(
        /*"https://tesseract.projectnaptha.com/img/eng_bw.png",*/
        imageUrl,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        document.getElementById("output_container").innerHTML += "<p>" + text + "</p>";
        tempArr.push(text);
        localStorage.setItem("notecards",  JSON.stringify(tempArr));
        console.log(tempArr);
    })
}, false);


