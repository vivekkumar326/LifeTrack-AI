const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const habitRoutes = require("./routes/habit.routes");

const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const calendarRoutes = require("./routes/calendar.routes");
const profileRoutes = require("./routes/profile.routes");
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LifeTrack AI Backend Running 🚀",
    version: "1.0.0",
  });
});



app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/profile", profileRoutes);

module.exports = app;