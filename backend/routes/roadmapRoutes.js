const express = require("express");
const router = express.Router();
const roadmapController = require("../controllers/roadmapController");
const { authVerify, adminVerify } = require("../middlewares/authMiddleware");

// Roadmap routes
router.get("/", authVerify, roadmapController.getAllRoadmaps);
router.get("/:year", authVerify, roadmapController.getRoadmapByYear);

// Only for admin
router.post("/", authVerify, adminVerify, roadmapController.createRoadmap);
router.put("/:id", authVerify, roadmapController.updateRoadmap);
router.delete("/:id", authVerify, roadmapController.deleteRoadmap);

module.exports = router;