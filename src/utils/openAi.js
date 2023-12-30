// import OpenAI from 'openai';
// import { OPENAI_KEY } from './constants';

// export const openai = new OpenAI({
//   apiKey: OPENAI_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true
// });

import { Configuration, OpenAIApi } from "azure-openai"; 
import { OPENAI_KEY } from "./constants";
const url="https://form-recognizer.openai.azure.com"
const deploymentName="gpt35turbo0301"
export const openAiApi = new OpenAIApi(
  new Configuration({
    
     // add azure info into configuration
     azure: {
        apiKey: OPENAI_KEY,
        endpoint: url,
        // deploymentName is optional, if you donot set it, you need to set it in the request parameter
        deploymentName: deploymentName,
     }
  }),
);