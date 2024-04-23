// controllers/rankingController.js
const Ranking = require('../models/Ranking');

exports.createRanking = async (req, res) => {
    try {
        const { plushieId, counter } = req.body;
        const newRanking = new Ranking({ plushieId, counter });
        await newRanking.save();
        res.status(201).json(newRanking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllRankings = async (req, res) => {
    try {
        const rankings = await Ranking.find().populate('plushieId');
        res.status(200).json(rankings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRanking = async (req, res) => {
    try {
        const { id } = req.params;
        const ranking = await Ranking.findById(id).populate('plushieId');
        if (!ranking) {
            return res.status(404).json({ message: "Ranking not found" });
        }
        res.status(200).json(ranking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRanking = async (req, res) => {
    try {
        const { id } = req.params;
        const ranking = await Ranking.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(ranking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRanking = async (req, res) => {
    try {
        const { id } = req.params;
        await Ranking.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
