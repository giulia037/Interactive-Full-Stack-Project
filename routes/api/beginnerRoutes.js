const router = require('express').Router();
const Beginner = require('../../models/beginner');

router.get('/', async (req, res) => {
    const beginnerData = await Beginner.findAll().catch((err) => {
      res.json(err);
    });
    res.json(beginnerData);
  });
  
  router.post('/', async (req, res) => {
    try {
      const beginnerData = await Beginner.create(req.body);
      res.status(200).json(beginnerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
  