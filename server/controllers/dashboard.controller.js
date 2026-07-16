const Habit = require("../models/Habit");

const getDashboard = async (req, res) => {
  try {
    const habits = await Habit.find({
      user: req.user.id,
    });

    const totalHabits = habits.length;

    const completedHabits = habits.filter(
      habit => habit.completed
    ).length;

    const pendingHabits =
      totalHabits - completedHabits;

    const completionRate =
      totalHabits === 0
        ? 0
        : Math.round(
            (completedHabits / totalHabits) * 100
          );

    const recentHabits = habits
      .sort(
        (a, b) =>
          b.createdAt - a.createdAt
      )
      .slice(0, 5);

    return res.status(200).json({
      success: true,
      data: {
        totalHabits,
        completedHabits,
        pendingHabits,
        completionRate,
        recentHabits,
      },
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
  getDashboard,
};