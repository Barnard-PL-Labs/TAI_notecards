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

//insert api
const api = '******************';
const tempC = document.querySelector('.c');

window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const {temp} = data.main;
                    const cTemp = `${parseFloat(temp).toFixed(2)}`;
                    tempC.textContent = cTemp + ' \u00B0C';

                    var tempColor = '#FFFFFF';
                    if ((-25 <= cTemp) && cTemp <= -15) {
                        tempColor = '#0c426e';
                    }
                    if ((-15 < cTemp) && cTemp <= -5) {
                        tempColor = '#1d66a1';
                    }
                    if ((-5 < cTemp) && cTemp <= 5) {
                        tempColor = '#3489cf';
                    }
                    if ((5 < cTemp) && cTemp <= 15) {
                        tempColor = '#5aadf2';
                    }
                    if ((15 < cTemp) && cTemp <= 25) {
                        tempColor = '#55ab5b';
                    }
                    if ((25 < cTemp) && cTemp <= 35) {
                        tempColor = '#ed9f40';
                    }
                    if ((35 < cTemp) && cTemp <= 45) {
                        tempColor = '#ed5a40';
                    }
                    document.body.style.backgroundColor = tempColor;

                });

        });
    }

});
