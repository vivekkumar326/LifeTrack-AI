const Habit = require("../models/Habit");

const createHabit = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      frequency,
      targetDays,
    } = req.body;

    // Validation
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Habit title is required",
      });
    }

    // Create Habit
    const habit = await Habit.create({
      user: req.user.id,
      title,
      description,
      category,
      frequency,
      targetDays,
    });

    return res.status(201).json({
      success: true,
      message: "Habit created successfully",
      data: habit,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createHabit,
};