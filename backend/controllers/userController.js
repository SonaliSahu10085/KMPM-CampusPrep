const User = require("../models/userModel");

// Get User profile
const getUserProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userDetails = await User.findById(user.id);
    res
      .status(200)
      .json({ message: "Profile fetched successfully", User: userDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User profile
const updateUserProfile = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!req.body) {
      return res.status(400).json({ error: "No data provided to update" });
    }

    const updatedprofile = await User.findByIdAndUpdate(user.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Profile updated successfully", User: updatedprofile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
