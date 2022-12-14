const router = require('express').Router();
const {Advanced} = require('../../models');

  router.get('/', async (req, res) => {
    try {
      const advancedData = await Advanced.findAll({
      });
      res.status(200).json(advancedData);
    } catch (err) {
      res.status(500).json(err);
    }
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
  