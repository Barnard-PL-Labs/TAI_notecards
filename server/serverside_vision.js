const OPENAI_API_KEY = process.env.API_KEY2;
const vision = require('@google-cloud/vision');
//import * as vision from '@google-cloud/vision';
const client = new vision.ImageAnnotatorClient({});


async function runVision(imageUrl) {
   
   
        const [response] = await client.documentTextDetection(imageUrl);
        const detections = response.textAnnotations;
        const [ words, ...others ] = detections;
        var text = text.description;
        console.log(text);
        return text;
   
}

exports.runVision = runVision
