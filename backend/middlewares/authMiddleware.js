const jwt = require("jsonwebtoken");

const authVerify = async (req, res, next) => {
    try {
        // Extract token from either cookie or header
        const token = req.cookies?.token || req.header("Authorization").split(" ")[1];

        // Check if token is present
        if (!token) {
            return res.status(401).json({ message: "Token not found" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized" });
    }
};

const adminVerify = async (req, res, next) => {
    try {
        const { role } = req.user;
        console.log(req.user.id);
        if (role !== "admin") {
            return res.status(401).json({ message: "only admin can create roadmap" });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized" });
    }
};

module.exports = { authVerify, adminVerify };
