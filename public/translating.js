var ocrResult = localStorage.getItem("ocr");

if (localStorage.getItem("notecards") == null){
    var tempArr =[];
} else {
   tempArr = JSON.parse(localStorage.getItem("notecards"));
}

window.addEventListener('load', function() {
  document.getElementById("output_container").innerHTML +=  ocrResult;
  tempArr.push(ocrResult);
  localStorage.setItem("notecards", JSON.stringify(tempArr));
});

// window.addEventListener('load', function() {
//   console.log("start")
//   $.get("/vision", {
//     imageUrlData: imageURL
//   }, function(result) {
//     console.log(result);
//     localStorage.setItem('vision', result);
//         document.getElementById("output_container").innerHTML +=  result;
//         tempArr.push(result);
//         localStorage.setItem("notecards", JSON.stringify(tempArr));
//   });
// }, false);

document.getElementById('doneBtn').addEventListener('click', function() {
        var arr = JSON.parse(localStorage.getItem("notecards"));
        arr.pop();
        arr.push(document.getElementById('output_container').innerHTML);
        console.log("array is " + arr);
        localStorage.setItem("notecards", JSON.stringify(arr));
});
