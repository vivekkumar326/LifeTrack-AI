const Habit = require("../models/Habit");
const HabitHistory = require("../models/HabitHistory");

const getAnalytics = async (req, res) => {
  try {
    const habits = await Habit.find({
      user: req.user.id,
    });

    const totalHabits = habits.length;

    const completedHabits = habits.filter(
      habit => habit.completed
    ).length;

    const pendingHabits = totalHabits - completedHabits;

    const completionRate =
      totalHabits === 0
        ? 0
        : Math.round((completedHabits / totalHabits) * 100);

    // Category-wise Analytics
    const categoryWise = {};

    habits.forEach((habit) => {
      if (!categoryWise[habit.category]) {
        categoryWise[habit.category] = 0;
      }

      categoryWise[habit.category]++;
    });

    const categoryData = Object.keys(categoryWise).map(category => ({
      category,
      count: categoryWise[category],
    }));
    // ================= Longest Streak =================

const longestStreak =
  habits.length === 0
    ? 0
    : Math.max(...habits.map((habit) => habit.streak));
    // ================= Weekly Progress =================

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const weeklyProgress = [];

for (let i = 6; i >= 0; i--) {

  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - i);

  const end = new Date(start);
  end.setHours(23, 59, 59, 999);

  const count = await HabitHistory.countDocuments({
    user: req.user.id,
    completed: true,
    date: {
      $gte: start,
      $lte: end,
    },
  });

  weeklyProgress.push({
    day: weekNames[start.getDay()],
    completed: count,
  });

}

   return res.status(200).json({
  success: true,
 data: {
  totalHabits,
  completedHabits,
  pendingHabits,
  completionRate,
  longestStreak,
  categoryWise: categoryData,
  weeklyProgress,
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
  getAnalytics,
};