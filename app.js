const express = require('express')
const serversideOCR = require('./server/serverside_ocr')

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

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
