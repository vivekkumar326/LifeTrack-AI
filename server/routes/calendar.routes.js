const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  getCalendar,
} = require("../controllers/calendar.controller");

router.get("/", authMiddleware, getCalendar);

module.exports = router;