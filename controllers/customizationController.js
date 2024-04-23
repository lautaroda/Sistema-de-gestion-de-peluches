// controllers/customizationController.js
const Customization = require('../models/Customization');

exports.createCustomization = async (req, res) => {
    try {
        const { userId, plushieId, color, accessory } = req.body;
        const newCustomization = new Customization({ userId, plushieId, color, accessory });
        await newCustomization.save();
        res.status(201).json(newCustomization);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllCustomizations = async (req, res) => {
    try {
        const customizations = await Customization.find().populate('userId').populate('plushieId');
        res.status(200).json(customizations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomization = async (req, res) => {
    try {
        const { id } = req.params;
        const customization = await Customization.findById(id).populate('userId').populate('plushieId');
        if (!customization) {
            return res.status(404).json({ message: "Customization not found" });
        }
        res.status(200).json(customization);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCustomization = async (req, res) => {
    try {
        const { id } = req.params;
        const customization = await Customization.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(customization);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomization = async (req, res) => {
    try {
        const { id } = req.params;
        await Customization.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOptions = async (req, res) => {
    const options = await CustomizationOptions.find();
    res.json(options);
};
