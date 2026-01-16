const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authVerify } = require("../middlewares/authMiddleware");

// Student routes
router.get("/profile", authVerify, userController.getUserProfile);
router.patch("/profile/update", authVerify, userController.updateUserProfile);

module.exports = router;