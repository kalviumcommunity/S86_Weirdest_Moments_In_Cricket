const mongoose = require("mongoose");

const momentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Funniest Run-outs",
        "Weirdest Catches",
        "Unexpected Umpire Decisions",
      ],
    },
    media: {
      type: String,
      trim: true,
    },
    user: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model("Moment", momentSchema);
