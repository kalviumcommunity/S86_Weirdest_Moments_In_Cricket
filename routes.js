const express = require('express');
const router = express.Router();
const Moment = require('./models/Moment');

// CREATE a moment
router.post('/moments', async (req, res) => {
  try {
    const moment = await Moment.create(req.body);
    res.status(201).json(moment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all moments
router.get('/moments', async (req, res) => {
  try {
    const moments = await Moment.find();
    res.status(200).json(moments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ a single moment by ID
router.get('/moments/:id', async (req, res) => {
  try {
    const moment = await Moment.findById(req.params.id);
    if (!moment) return res.status(404).json({ error: 'Moment not found' });
    res.status(200).json(moment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a moment
router.put('/moments/:id', async (req, res) => {
  try {
    const updated = await Moment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Moment not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a moment
router.delete('/moments/:id', async (req, res) => {
  try {
    const deleted = await Moment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Moment not found' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
