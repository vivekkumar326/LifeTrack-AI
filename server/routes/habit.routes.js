const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createHabit,
  getAllHabits,
  getHabitById,
  updateHabit,
  deleteHabit,
} = require("../controllers/habit.controller");

router.post("/", authMiddleware, createHabit);

router.get("/", authMiddleware, getAllHabits);

router.get("/:id", authMiddleware, getHabitById);

router.put("/:id", authMiddleware, updateHabit);
router.delete("/:id", authMiddleware, deleteHabit);

module.exports = router;