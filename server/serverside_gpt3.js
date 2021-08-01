const OpenAI = require('openai-api');
const OPENAI_API_KEY = process.env.API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

async function runGPT3(myPromt) {
  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: myPromt,
    maxTokens: 5,
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
    stop: ['\n', "testing"]
  });
  /* ask mark what this is for since it does nothing vs commented out
  var text = gptResponse.data
  console.log(text);
  return text;*/
  return gptResponse.data;
};



exports.runGPT3 = runGPT3;
