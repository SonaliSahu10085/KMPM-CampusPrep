const mongoose = require("mongoose");

const questionRecordSchema = new mongoose.Schema({
  question: { 
    type: String, 
    required: true 
  },
  answerTranscript: { 
    type: String, 
    required: true 
  },
  aiFeedback: { 
    type: String, required: true 
  },
  score: { 
    type: Number, 
    default: 0 
  },
});

const interviewSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  language: {
    type: String,
    enum: ["english", "hinglish"],
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  questionsAsked: [questionRecordSchema],
  overallScore: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Interview", interviewSchema);
