const OpenAI = require('openai-api');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = "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";

const openai = new OpenAI(OPENAI_API_KEY);

/*var category = localStorage.getItem("prompt_word");

var notesArr = JSON.parse(localStorage.getItem('notecards'));

var promptString = `The following are ${category}s. What is another example:\n\n: `;
for (var i = 0; i < notesArr.length - 1; i++){
  promptString += notesArr[i] + `, `;
}
promptString += notesArr[notesArr.length - 1] + `,`;*/

async function runGPT3(myPromt) {
  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: myPromt, //promptString
    maxTokens: 1,
    temperature: 0,
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
