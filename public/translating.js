var imageURL = localStorage.getItem("picUrl");
if (localStorage.getItem("notecards") == null){
    var tempArr =[];
} else {
   tempArr = JSON.parse(localStorage.getItem("notecards"));
}

//remember to move this to all serverside 
// window.addEventListener('load', function(){
//     Tesseract.recognize(
//         /*"https://tesseract.projectnaptha.com/img/eng_bw.png",*/
//         imageUrl,
//         'eng',
//         { logger: m => console.log(m) }
//     ).then(({ data: { text } }) => {
//         localStorage.setItem('ocr', text);
//         document.getElementById("output_container").innerHTML +=  text;
//         tempArr.push(text);
//         localStorage.setItem("notecards", JSON.stringify(tempArr));
//         console.log(tempArr);
//     })
// }, false);

//const playButton2 = document.getElementById('server_button');

window.addEventListener('load', function() {
  console.log("start")
  //var imageUrl = document.getElementById("imageToOCR_server").value;

  $.get("/ocr", {
    imageUrlData: imageURL
  }, function(result) {
    console.log(result);
    localStorage.setItem('ocr', result);
        document.getElementById("output_container").innerHTML +=  result;
        tempArr.push(result);
        localStorage.setItem("notecards", JSON.stringify(tempArr));
        //console.log(tempArr);
  });
}, false);


/*document.getElementById('doneBtn').addEventListener('click', function(){
    var popArr = JSON.parse(localStorage.getItem("notecards")).pop();
    localStorage.setItem("notecards", JSON.stringify(popArr.push(document.getElementsByClassName(text))));
}, false);*/

document.getElementById('submitBtn').addEventListener('click', function() {
        console.log("WORKING");
        var arr = JSON.parse(localStorage.getItem("notecards"));
        console.log("Oh NO");
        arr.pop();
        console.log("I am not working");
        arr.push(document.getElementById('output_container').innerHTML);
        console.log("array is " + arr);
        localStorage.setItem("notecards", JSON.stringify(arr));


});
