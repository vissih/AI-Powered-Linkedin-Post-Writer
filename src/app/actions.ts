"use server";

import { generateObject } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";
import endent from "endent";

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? "",
  baseURL: "https://api.groq.com/openai/v1",
});

const systemPrompt = endent`

You are an AI assistant tasked with generating engaging LinkedIn posts based on user input.

Instructions:

Analyze the User's Inputs:
- Carefully review the provided content description and target audience.
- Understand the user's main message and key objectives.

Generate the Post:
- Create a post that succinctly answers:
  - What is the main point the user wants to convey?
  - Why is it important to the audience?
  - What action or takeaway should the audience have?
- Incorporate relevant keywords to enhance SEO and engagement.
- Use a professional yet approachable tone that resonates with LinkedIn users.

Post Requirements:
- Highlight the most important information in a clear and engaging manner.
- Include a strong call to action or question to encourage interaction.
- Use hashtags strategically to increase visibility, ensuring no more than 5 hashtags are included.

Additional Guidelines:
- Write a detailed post.
- Maintain clarity and coherence throughout the post.
- Provide response in JSON format only

Do not include any description, do not include the \`\`\`.
  Code (no \`\`\`):
  `;

export async function generatePost(
  input: string,
  temperature: number,
  model: string
) {
  "use server";

  const {
    object: data,
    warnings,
    finishReason,
    rawResponse,
  } = await generateObject({
    model: groq(model),
    system: systemPrompt,
    prompt: input,
    temperature: temperature,
    maxTokens: 1024,
    schema: z.object({
      data: z.array(
        z.object({
          post: z.string().describe("Add generated post here!"),
        })
      ),
    }),
  });
  // console.log(warnings, finishReason, rawResponse);

  return { data };
}
