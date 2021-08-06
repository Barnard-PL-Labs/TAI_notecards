require('dotenv').config();

const express = require('express')
//const serversideOCR = require('./server/serverside_ocr')
const fetch = require('node-fetch');
const serversideGPT3 = require('./server/serverside_gpt3');
const serversideVision = require('./server/serverside_vision');


const app = express()
const port = 3000
app.use(express.json({ limit: 500000}));

app.use(express.static('public'))

// app.get('/ocr', function (req, res) {
//     console.log("starting ocr on server");
//     console.log(req.query.imageUrlData);
//     var result = serversideOCR.runOcr(req.query.imageUrlData);
//     result.then(val => {
//         console.log(val);
//         res.send(val);
//     }).catch(e => {
//         console.log(e);
//     });
// });

app.get('/vision', function (req, res) {
    console.log("starting google_vision on server");
    console.log(req.query.imageUrlData);
    var result = serversideVision.runVision(req.query.imageUrlData);
    result.then(val => {
        console.log(val);
        res.send(val);
    }).catch(e => {
        console.log(e);
    });
});


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

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

//for running purposes in terminal
//node  --max-http-header-size=1000000 app.js
