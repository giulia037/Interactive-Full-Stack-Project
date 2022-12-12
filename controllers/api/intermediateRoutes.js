const router = require('express').Router();
const Intermediate = require('../../models/intermediate');

router.get('/', async (req, res) => {
    const intermediateData = await Intermediate.findAll().catch((err) => {
      res.json(err);
    });
    res.json(intermediateData);
  });
  
  router.post('/', async (req, res) => {
    try {
      const intermediateData = await Intermediate.create(req.body);
      res.status(200).json(intermediateData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
