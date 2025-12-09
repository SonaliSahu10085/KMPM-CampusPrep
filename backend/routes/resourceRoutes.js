const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourceController");
const { authVerify } = require("../middlewares/authMiddleware");

// Resource routes
router.get("/", authVerify, resourceController.getAllResources);
router.get("/:topic", authVerify, resourceController.getResourceByTopic);

// Only for admin
router.post("/", authVerify, resourceController.createResource);
router.patch("/:id", authVerify, resourceController.updateResource);
router.delete("/:id", authVerify, resourceController.deleteResource);

module.exports = router;
