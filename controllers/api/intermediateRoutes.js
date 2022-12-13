const router = require('express').Router();
const {Intermediate} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const intermediateData = await Intermediate.findAll({
    });
    res.status(200).json(intermediateData);
  } catch (err) {
    res.status(500).json(err);
  }
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
