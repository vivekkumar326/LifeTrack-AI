const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Health",
        "Fitness",
        "Study",
        "Work",
        "Finance",
        "Personal",
        "Other",
      ],
      default: "Other",
    },

    frequency: {
      type: String,
      enum: ["Daily", "Weekly", "Monthly"],
      default: "Daily",
    },

    completed: {
      type: Boolean,
      default: false,
    },

    streak: {
      type: Number,
      default: 0,
    },

    targetDays: {
      type: Number,
      default: 30,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Habit", habitSchema);