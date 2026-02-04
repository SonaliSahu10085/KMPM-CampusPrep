const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils");
const passport = require("passport");
require("../middlewares/google");

// User/Admin signup
const signup = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Please provide the body parameters" });
    }
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password with 10 salt rounds
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const registerUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = await generateToken(registerUser);
    // Send response
    res.status(201).json({
      message: "User registered successfully",
      user: registerUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User/Admin login
const login = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Please provide the body parameters" });
    }

    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      return res.status(401).json({ error: "Invalid email" });
    }

    if (!loginUser.password) {
      return res.status(400).json({
        error: "This account is registered using Google. Please login with Google."
      });
    }

    //bcrypt.compare() hashes the input password and compares it with the stored hash.
    const isMatch = await bcrypt.compare(password, loginUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = await generateToken(loginUser);
    res
      .status(200)
      .json({ message: "Login successful", user: loginUser, Token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Google OAuth login
const loginWithGoogle = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// Google OAuth callback

//to-do don't sure this is correct or not 
const googleCallback = (req, res, next) => {
  passport.authenticate('google', { session: false }, async (err, user) => {
    if (err || !user) {
      return res.redirect('https://kmpm-campusprep.vercel.app/');
    }

    const token = await generateToken(user);

    // redirect to frontend with token
    res.redirect(`https://kmpm-campusprep.vercel.app/?token=${token}`);
  })(req, res, next);
};

module.exports = { signup, login, loginWithGoogle, googleCallback };
