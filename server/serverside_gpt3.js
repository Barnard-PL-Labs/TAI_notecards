import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY");


async function runGPT3(humanText) {
  response = openai.Completion.create(
    engine="davinci",
    prompt="The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
    temperature=0.9,
    max_tokens=150,
    top_p=1,
    frequency_penalty=0.0,
    presence_penalty=0.6,
    stop=["\n", " Human:", " AI:"]
  )
  return response;
}

exports.runGPT3 = runGPT3;






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
