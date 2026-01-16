const jwt = require("jsonwebtoken");
module.exports.generateToken = async (user) => {
  // Create JWT token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};
