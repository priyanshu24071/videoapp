const express = require('express');
const router = express.Router();
const Overlay = require('../models/Overlays');

// CRUD Endpoints
router.post('/', async (req, res) => {
  try {
    const overlay = new Overlay(req.body);
    await overlay.save();
    res.status(201).send(overlay);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const overlays = await Overlay.find({});
    res.status(200).send(overlays);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const overlay = await Overlay.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!overlay) {
      return res.status(404).send();
    }
    res.status(200).send(overlay);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const overlay = await Overlay.findByIdAndDelete(req.params.id);
    if (!overlay) {
      return res.status(404).send();
    }
    res.status(200).send(overlay);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;