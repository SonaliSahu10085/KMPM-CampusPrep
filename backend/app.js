const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const roadmapRouter = require("./routes/roadmapRoutes");
const resourceRouter = require("./routes/resourceRoutes");
const { notFound } = require("./middlewares/notFound");
const { errorHandling } = require("./middlewares/errorHandling");
const morgan = require("morgan");

// database connection
connectDB();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/users", userRouter);
app.use("/roadmaps", roadmapRouter);
app.use("/resources", resourceRouter);

// error handling middleware
app.use(notFound);
app.use(errorHandling);

module.exports = app;