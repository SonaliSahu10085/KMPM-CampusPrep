const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");
const { authVerify, adminVerify } = require("../middlewares/authMiddleware");

// Resource routes
router.get("/", authVerify, resourceController.getAllResources);
router.get("/:topic", authVerify, resourceController.getResourceByTopic);

// Only for admin
router.post("/", authVerify, adminVerify, resourceController.createResource);
router.patch("/:id", authVerify, adminVerify, resourceController.updateResource);
router.delete("/:id", authVerify, adminVerify, resourceController.deleteResource);

module.exports = router;
