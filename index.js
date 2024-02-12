const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'Roast me I am a Full stack dev.' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion);
}

main();
