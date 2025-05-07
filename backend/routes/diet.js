const express = require('express');
const Diet = require('../model/Diet.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const diets = await Diet.find();
    res.json(diets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const diet = await Diet.findById(req.params.id);
    if (!diet) return res.status(404).json({ error: 'Diet not found' });
    res.json(diet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const diet = new Diet(req.body);
    await diet.save();
    res.status(201).json(diet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedDiet = await Diet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDiet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Diet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Diet deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

