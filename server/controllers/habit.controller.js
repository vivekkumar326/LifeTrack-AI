const Habit = require("../models/Habit");
const HabitHistory = require("../models/HabitHistory");

// =======================
// Create Habit
// =======================
const createHabit = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      frequency,
      targetDays,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Habit title is required",
      });
    }

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

  // Mongoose Validation Error
  if (error.name === "ValidationError") {
    const firstError = Object.values(error.errors)[0].message;

    return res.status(400).json({
      success: false,
      message: firstError,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}
};

// =======================
// Get All Habits
// =======================
const getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: habits.length,
      data: habits,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// =======================
// Get Single Habit
// =======================
const getHabitById = async (req, res) => {
  try {
    const habit = await Habit.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      });
    }

    return res.status(200).json({
      success: true,
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

// =======================
// Update Habit
// =======================
const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      });
    }

    const {
      title,
      description,
      category,
      frequency,
      targetDays,
      completed,
      streak,
    } = req.body;

    if (title !== undefined) habit.title = title;
    if (description !== undefined) habit.description = description;
    if (category !== undefined) habit.category = category;
    if (frequency !== undefined) habit.frequency = frequency;
    if (targetDays !== undefined) habit.targetDays = targetDays;
    if (completed !== undefined) habit.completed = completed;
    if (streak !== undefined) habit.streak = streak;

    await habit.save();

    return res.status(200).json({
      success: true,
      message: "Habit updated successfully",
      data: habit,
    });
  } catch (error) {
  console.error(error);

  if (error.name === "ValidationError") {
    const firstError = Object.values(error.errors)[0].message;

    return res.status(400).json({
      success: false,
      message: firstError,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}
};

// Delete Habit
const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      });
    }

    await Habit.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Habit deleted successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// Complete Habit
const completeHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      });
    }
// Toggle completion
habit.completed = !habit.completed;

// Update streak
if (habit.completed) {
  habit.streak += 1;
} else {
  habit.streak = Math.max(0, habit.streak - 1);
}

await habit.save();

// Save History
await HabitHistory.create({
  user: req.user.id,
  habit: habit._id,
  date: new Date(),
  completed: habit.completed,
});

    return res.status(200).json({
      success: true,
      message: "Habit completed successfully",
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
  getAllHabits,
  getHabitById,
  updateHabit,
  deleteHabit,
  completeHabit,
};