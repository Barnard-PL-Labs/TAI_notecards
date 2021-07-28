/*const playButton2 = document.getElementById('server_button');

playButton2.addEventListener('click', function() {
  console.log("start")
  var imageUrl = document.getElementById("imageToOCR_server").value;
  $.get("/ocr", {
    imageUrlData: imageUrl
  }, function(result) {
    console.log(result);
  });
}, false);

const weatherButton = document.getElementById('weather_button');

weatherButton.addEventListener('click', function() {
  console.log("start")
  var weatherZip = document.getElementById("weather_zip").value;
  $.get("/weather", {
    weatherZipData: weatherZip
  }, function(result) {
    console.log(result);
    document.body.style.backgroundColor = result;
  });
}, false);*/

const chatButton = document.getElementById("get_response");

chatButton.addEventListener('click', function() {
  console.log("start")
  var humanText = document.getElementById("chat_box").value;
  $.get("/gpt-3", {
    chatData: humanText
  }, function(result) {
    var out = result.choices[0].text;
    console.log(out);
    document.getElementById("aibots_card").innerHTML = out;
  });
}, false);
