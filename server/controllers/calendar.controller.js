const HabitHistory = require("../models/HabitHistory");

const getCalendar = async (req, res) => {
  try {
    const history = await HabitHistory.find({
      user: req.user.id,
    })
      .populate("habit", "title category")
      .sort({ date: -1 });
      const filteredHistory = history.filter((item) => item.habit);

    return res.status(200).json({
      success: true,
     count: filteredHistory.length,
data: filteredHistory,
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
  getCalendar,
};