const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Student routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/google", authController.loginWithGoogle);
router.get("/google/callback", authController.googleCallback);

module.exports = router;