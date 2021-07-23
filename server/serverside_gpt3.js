const OpenAI = require('openai-api');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = "sk-0C0Njd3aJyPyk8J2nKX4Vyy8AvjUHHll1D6PuF42";

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

  return gptResponse.data;
};



exports.runGPT3 = runGPT3;