const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createHabit,
  getAllHabits,
  getHabitById,
  updateHabit,
} = require("../controllers/habit.controller");

router.post("/", authMiddleware, createHabit);

router.get("/", authMiddleware, getAllHabits);

router.get("/:id", authMiddleware, getHabitById);

router.put("/:id", authMiddleware, updateHabit);

module.exports = router;