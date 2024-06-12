// controllers/plushieController.js
const Plushie = require('../models/Plushie');
const Customization = require('../models/Customization');

exports.createPlushie = async (req, res) => {
    try {
        const { name, imageUrl } = req.body;
        const newPlushie = new Plushie({ name, imageUrl });
        await newPlushie.save();
        res.status(201).json(newPlushie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllPlushies = async (req, res) => {
    try {
        const plushies = await Plushie.find();
        res.status(200).json(plushies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPlushie = async (req, res) => {
    try {
        const { id } = req.params;
        const plushie = await Plushie.findById(id);
        if (!plushie) {
            return res.status(404).json({ message: "Plushie not found" });
        }
        res.status(200).json(plushie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePlushie = async (req, res) => {
    try {
        const { id } = req.params;
        const plushie = await Plushie.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(plushie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePlushie = async (req, res) => {
    try {
        const { id } = req.params;

        // Eliminar personalizaciones asociadas
        await Customization.deleteMany({ plushieId: id });

        // Eliminar el peluche
        await Plushie.findByIdAndDelete(id);

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRanking = async (req, res) => {
    try {
        const rankings = await Plushie.find().sort({ chosenCount: -1 });
        res.status(200).json(rankings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
