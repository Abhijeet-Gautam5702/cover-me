const OpenAiApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getResponse(data) {
  const { job_profile, min_yoe, job_desc } = data;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create cover letter:\nExperience:${min_yoe}\nJob Profile:${job_profile}\nJob description:${job_desc}`,
    max_tokens: 800,
    temperature: 0,
  });

  return response.data.choices[0].text;
}

export { getResponse };
