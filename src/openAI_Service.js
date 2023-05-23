const OpenAiApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getResponse(data={}) {
  const { job_profile, min_yoe, job_desc,skillset } = data;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create cover letter:\nExperience:${min_yoe}\nJob Profile:${job_profile}\nMy skillset:${skillset}\nJob description:${job_desc}`,
    max_tokens: 800,
    temperature: 0,
  });

  // console.log(response.data.choices[0].text);
  var res= `${response.data.choices[0].text}`;
  res = res.replace(/\n/g, "<br>");
  // return response.data.choices[0].text;
  return res;
}

// getResponse();

export { getResponse };
