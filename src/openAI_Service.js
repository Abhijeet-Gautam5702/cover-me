import { Configuration, OpenAIApi } from "openai";

// var OpenAiApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
var OpenAiApiKey;

// initializing OpenAI configuration
var configuration = new Configuration({
  apiKey: OpenAiApiKey,
});
var openai = new OpenAIApi(configuration);

// function to change the API-key
function setApiKeyFromUserInput(key) {
  OpenAiApiKey = key;
  // console.log(OpenAiApiKey);

  // change the configurations as well
  setOpenAIConfig(OpenAiApiKey);
}

// function to change the OPENAI configurations
function setOpenAIConfig(OpenAiApiKey) {
  configuration = new Configuration({
    apiKey: OpenAiApiKey,
  });
  openai = new OpenAIApi(configuration);
}

// function to get response from the OPEN AI API
async function getResponse(data = {}) {
  const { job_profile, min_yoe, job_desc, skillset } = data;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Create cover letter:\nExperience:${min_yoe}\nJob Profile:${job_profile}\nMy skillset:${skillset}\nJob description:${job_desc}`,
      max_tokens: 800,
      temperature: 0,
    });
    var res = `${response.data.choices[0].text}`;
    res = res.replace(/\n/g, "<br>");
    return res;
  } catch (err) {
    console.error(err);
    var res =
      "OOPS! There is an internal Error. \n\nThe following are some causes of the error.\n1. Your free quota of OPEN-AI API might have exhausted. You may have to use a different account to get a fresh quota.\n2. You might have entered an invalid API-key. Please generate a new API key.\n";
    res = res.replace(/\n/g, "<br>");
    return res;
  }

  // return res;
}

export { getResponse, setApiKeyFromUserInput };
