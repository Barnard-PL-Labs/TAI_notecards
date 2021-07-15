const express = require('express')
const serversideOCR = require('./server/serverside_ocr')
const fetch = require('node-fetch');


const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/ocr', function(req, res) {
  console.log("starting ocr on server");
  console.log(req.query.imageUrlData);
  //TODO need to wait for this to finish before we do res.send(result)
  var result = serversideOCR.runOcr(req.query.imageUrlData);
  console.log(result);
  res.send(result);
});

app.get('/weather', function(req, res) {
  console.log("checking weather on server");
  console.log(req.query.weatherZipData);

  const api = '*********************';

  var zipcode = req.query.weatherZipData;

  const base = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${api}&units=metric`;
  fetch(base)
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          const {temp} = data.main;
          const cTemp = `${parseFloat(temp).toFixed(2)}`;

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
          res.send(tempColor)

      });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
