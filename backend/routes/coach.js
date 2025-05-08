const express = require('express');

const Coach = require('../model/Coach.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.json(coaches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const coach = await Coach.findById(req.params.id);
    if (!coach) return res.status(404).json({ error: 'Coaches are not found' });
    res.json(coach);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const coach = new Coach(req.body);
    await coach.save();
    res.status(201).json(coach);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCoach = await Coach.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCoach);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Coach.findByIdAndDelete(req.params.id);
    res.json({ message: 'Coach deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

