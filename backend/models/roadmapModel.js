const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    year: {
      type: Number, // 1, 2, 3
      required: [true, "Year is required"],
      enum: [1, 2, 3], // only 3 years of roadmap
    },
    title: {
      type: String,
      required: [true, "Title is required"], // e.g. "DSA Basics", "Web Development"
    },
    description: {
      type: String,
    },
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource", // links of the resources (notes, links, practice material)
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // who created this roadmap
      required: true,
    },
  },
  { timestamps: true }
);

const Roadmap = mongoose.model("Roadmap", roadmapSchema);
module.exports = Roadmap;
