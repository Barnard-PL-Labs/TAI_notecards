const tesseract = require('tesseract.js');

async function runOcr(imageUrl) {
    var response = await tesseract.recognize(
        imageUrl,
        'eng',
        { logger: m => console.log(m) }
    )
    var text = response.data.text
    console.log(text);
    return text;
}

exports.runOcr = runOcr
