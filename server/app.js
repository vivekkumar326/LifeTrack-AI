const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const habitRoutes = require("./routes/habit.routes");

const authRoutes = require("./routes/auth.routes");

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

module.exports = app;