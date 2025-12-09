const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User signup
const userSignUp = async (req, res) => {
    try {
        const { fullName, email, role, password } = req.body;

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
            role,
            password : hashedPassword,
        });

        // Send response
        res.status(201).json({ message: "User registered successfully", user: registerUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// User login
const userLogin = async (req, res) => {
    try {
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
        if (!isMatch){
             return res.status(400).json({ message: "Invalid credentials" });
        }
        
        // Create JWT token
        const token = jwt.sign({ id: loginUser._id, role: loginUser.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    
        res.status(200).json({ message: "Login successful", user: loginUser, Token: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get User profile
const getUserProfile = async (req, res) => {
    try {
        const user = req.user;
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const userDetails = await User.findById(user.id);
        res.status(200).json({ message : "Profile fetched successfully", User : userDetails });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update User profile
const updateUserProfile = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if(!req.body) {
            return res.status(400).json({ error: "No data provided to update" });
        }

        const updatedprofile = await User.findByIdAndUpdate(user.id, req.body, { new: true });
        console.log(updatedprofile);
        res.status(200).json({message : "Profile updated successfully", User : updatedprofile });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { userSignUp, userLogin, getUserProfile, updateUserProfile };