// Importing Packages
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");

// Importing Routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const roadmapRouter = require("./routes/roadmapRoutes");
const resourceRouter = require("./routes/resourceRoutes");

// Importing Middlewares
const { notFound } = require("./middlewares/notFound");
const { errorHandling } = require("./middlewares/errorHandling");

// database connection
connectDB();
const app = express();

// middlewares
app.use(
  cors({
    origin: ["http://localhost:5173/", "https://kmpm-campusprep.vercel.app/"],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res
    .send(
      "Please visit our platform at <a href='https://kmpm-campusprep.vercel.app/'>https://kmpm-campusprep.vercel.app/</a>"
    );
});

// routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/roadmaps", roadmapRouter);
app.use("/api/resources", resourceRouter);

// error handling middleware
app.use(notFound);
app.use(errorHandling);

module.exports = app;
