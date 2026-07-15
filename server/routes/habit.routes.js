const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createHabit,
} = require("../controllers/habit.controller");

router.post("/", authMiddleware, createHabit);

module.exports = router;