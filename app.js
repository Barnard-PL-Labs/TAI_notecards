require('dotenv').config();

const express = require('express')
const serversideOCR = require('./server/serverside_ocr')
const fetch = require('node-fetch');
const serversideGPT3 = require('./server/serverside_gpt3');
//const serversideVision = require('./server/serverside_vision');
const imageDataURI = require('image-data-uri');
const fs = require('fs');
const https = require('https');


const app = express()
const port = 443
app.use(express.json({ limit: 500000}));

app.use(express.static('public'))

app.get('/ocr', function (req, res) {
    console.log("starting ocr on server");
    //console.log(req.query.imageUrlData);
    var result = serversideOCR.runOcr(req.query.imageUrlData);
    result.then(val => {
        console.log(val);
        res.send(val);
    }).catch(e => {
        console.log(e);
    });
});

// app.get('/vision', function (req, res) {
//     console.log("starting google_vision on server");
//     console.log(req.query.imageUrlData);
//     let filePath = 'cap.png';
//     imageDataURI.outputFile(req.query.imageUrlData, filePath)
//      .then(fileSaveRes => {
//        var result = serversideVision.runVision(filePath);
//        result.then(val => {
//            console.log(val);
//            res.send(val);
//        }).catch(e => {
//            console.log(e);
//        });
//      });
// });


app.get('/gpt-3', function (req, res) {
    console.log("starting gpt-3 on server");
    console.log(req.query.examplesData);
    var result = serversideGPT3.runGPT3(req.query.examplesData);

    result.then(val => {
        console.log(val);
        var answer = val.choices[0].text;
        console.log("New Example: " + answer);
        res.send(answer);

    }).catch(e => {
        console.log(e);
    });

});

try {
var privateKey = fs.readFileSync( 'key.pem' );
var certificate = fs.readFileSync( 'cert.pem' );

https.createServer({
	    key: privateKey,
	    cert: certificate
}, app).listen(port, () => {
   console.log(`app listening at https://localhost:${port}`)
});
} catch (e) {
  console.log(e)
  console.log("HTTPS will not be enabled, HTTP might still work")
  app.listen(80, () => {
    console.log(`app listening at http://localhost:80`)
  })
}


//for running purposes in terminal
//node  --max-http-header-size=1000000 app.js
