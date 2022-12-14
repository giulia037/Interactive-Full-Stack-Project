const router = require('express').Router();
const {Beginner} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const beginnerData = await Beginner.findAll({
    });
    res.status(200).json(beginnerData);
  } catch (err) {
    res.status(500).json(err);
  }
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
  