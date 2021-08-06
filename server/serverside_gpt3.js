const OpenAI = require('openai-api');
const OPENAI_API_KEY = process.env.API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

async function runGPT3(myPrompt) {
  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: myPrompt,
    maxTokens: 6,
    temperature: 0,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
    stop: ['\n', "testing"]
  });

  return gptResponse.data;
};



exports.runGPT3 = runGPT3;
