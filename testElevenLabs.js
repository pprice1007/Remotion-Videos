require("dotenv").config();
const { ElevenLabsClient } = require("elevenlabs");

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

async function testConnection() {
  const response = await client.voices.getAll();
  const firstThree = response.voices.slice(0, 3);
  console.log("ElevenLabs connection successful. First 3 voices:");
  firstThree.forEach((voice, i) => console.log(`  ${i + 1}. ${voice.name}`));
}

testConnection().catch(console.error);
