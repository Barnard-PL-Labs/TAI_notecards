const tesseract = require('tesseract.js');

async function runOcr(imageUrl) {
    tesseract.recognize(
        imageUrl,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        return text;
    })
}

exports.runOcr = runOcr
