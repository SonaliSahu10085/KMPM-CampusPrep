const Vapi = require("vapi");
const vapi = new Vapi(process.env.VAPI_API_KEY);

const interviewAgentConfig = {
  instructions: `
    You are an AI interview agent for BCA students.
    Ask one interview question at a time.
    After student answers, evaluate:
    - correctness
    - clarity
    - fluency
    - missing concepts
    Give short feedback.
    After 5 questions, generate final score and stop.
  `,
  voice: "alloy",
  firstMessage: "Welcome! Let's start your mock interview. Ready?",
};

module.exports = { vapi, interviewAgentConfig };