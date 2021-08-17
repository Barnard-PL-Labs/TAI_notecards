//const GOOGLE_APPLICATION_CREDENTIALS = process.env.API_KEY2;
const vision = require('@google-cloud/vision');
//import * as vision from '@google-cloud/vision';
const client = new vision.ImageAnnotatorClient({
  credentials: {
    client_email: "tangibleai@appspot.gserviceaccount.com",
    private_key: "************************************"
  }
});


async function runVision(imageUrl) {
	try {
          const [response] = await client.documentTextDetection(imageUrl);
          const detections = response.textAnnotations;
          const [ words, ...others ] = detections;
          var text = text.description;
          console.log(text);
	}
	catch (error) {
	  console.log(error)
	}
        return text;
}

exports.runVision = runVision
