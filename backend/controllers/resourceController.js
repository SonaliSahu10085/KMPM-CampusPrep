const Resource = require("../models/resourceModel");

// Get all resources
const getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        if (!resources) {
            return res.status(404).json({ message: "No resources found" });
        }

        res.status(200).json({ message: "Resources fetched successfully", count: resources.length, resources: resources });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get resource by topic
const getResourceByTopic = async (req, res) => {
    try {
        const { topic } = req.params;
        if (!topic) {
            return res.status(400).json({ message: "Topic is required" });
        }

        const resources = await Resource.find({
            topic: { $regex: topic, $options: "i" }, // case-insensitive match
        });

        if (!resources || resources.length === 0) {
            return res
                .status(404)
                .json({ message: "No resources found for this topic" });
        }

        res.status(200).json({ message: "Resource fetched successfully", count: resources.length, resource: resources });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create resource
const createResource = async (req, res) => {
    try {
        const { title, type, url, description, topic, year, file } = req.body;
        if (!title || !type || !topic || !year) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // URL check only for non-note resources
        if (type !== "note" && !url) {
            return res.status(400).json({ message: "URL is required for non-note resources" });
        }

        const newResource = new Resource({
            title,
            type,
            url,
            description,
            topic,
            year,
            file,
            addedBy: req.user.id // from auth middleware if available
        });

        await newResource.save();

        res.status(201).json({ message: "Resource created successfully", data: newResource});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update resource
const updateResource = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Resource ID is required" });
        }

        if (!req.body) {
            return res.status(400).json({ message: "No data provided to update" });
        }

        const updatedResource = await Resource.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Resource updated successfully", resource: updatedResource });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete resource
const deleteResource = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Resource ID is required" });
        }

        const deletedResource = await Resource.findByIdAndDelete(id);
        if (!deletedResource) {
            return res.status(404).json({ message: "Resource not found for deleted" });
        }

        res.status(200).json({ message: "Resource deleted successfully", resource: deletedResource });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllResources, getResourceByTopic, createResource, updateResource, deleteResource };