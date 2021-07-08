
const playButton = document.getElementById('client_button');

playButton.addEventListener('click', function () {
    var imageUrl = document.getElementById("imageToOCR").value;
    Tesseract.recognize(
        //"https://tesseract.projectnaptha.com/img/eng_bw.png",
        imageUrl,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        document.getElementById("result").innerHTML = "Output:";
        document.getElementById("output_container").innerHTML += "<p>" + text + "</p>";
        console.log(text);
    })

}, false);

var x = document.getElementById("YourLocation");

//permission to give location data
function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
}
//gets latitude and longitude
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
      }
import axios from 'axios';

//API specific settings
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = '3627af5d1db69a65287a5897f4d0c704';
const LOCATION_ZIP_CODE = '01002';
const COUNTRY_CODE = 'us';
const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;
axios.get(ENTIRE_API_URL)
    .then(response => console.log(response))
    .catch(error => console.log('Error', error));








