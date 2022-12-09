const router = require('express').Router();
const Advanced = require('../../models/Advanced');

router.get('/', async (req, res) => {
    const advancedData = await Advanced.findAll().catch((err) => {
      res.json(err);
    });
    res.json(advancedData);
  });
  
  router.post('/', async (req, res) => {
    try {
      const advancedData = await Advanced.create(req.body);
      res.status(200).json(advancedData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
  