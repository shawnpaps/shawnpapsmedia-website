import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: ".env.local" });
const prerender = false;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
const promptId = process.env.OPENAI_PROMPT_ID || "pmpt_69ad93fdd8dc81968072a8348e8bc82703bf8c25a5bd3111";
const promptVersion = process.env.OPENAI_PROMPT_VERSION || "pmptver_9b1c8e5a7c0d2f1a2b3c4d5e6f78901234567890abcdef12";
const POST = async ({ request }) => {
  try {
    const { message } = await request.json();
    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const response = await openai.responses.create({
      prompt: {
        id: promptId,
        version: promptVersion
      },
      input: message
    });
    return new Response(JSON.stringify({ reply: response.output_text }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("OpenAI error:", error);
    return new Response(JSON.stringify({ error: "Failed to get response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
