const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils");

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

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      return res.status(401).json({ error: "Invalid email" });
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

module.exports = { signup, login };
