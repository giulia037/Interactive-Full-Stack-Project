const router = require('express').Router();
const { User, intermediate, collection, beginner, advanced } = require('../models');
const withAuth = require('../utils/auth');
// GET all stages for homepage
router.get('/', async (req, res) => {
  try {
    const collectionData = await collection.findAll({
      include: [
        {
          model: beginner,
          attributes: ['filename', 'description'],

          model: intermediate,
          attributes: ['filename', 'description'],

          model: advanced,
          attributes: ['filename', 'description'],


        },
      ],
    });

    const collection = dbcollectionData.map((collection) =>
      collection.get({ plain: true })
    );

    res.render('homepage', {
      collectionData: collectionData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET beginner category 
router.get('/beginner/:id', async (req, res) => {
  try {
    const dbBeginnerData = await beginner.findByPk(req.params.id, {
      include: [
        {
          model: beginner,
          attributes: [
            'id',
            'title',
            'author',
            'cost',
          ],
        },
      ],
    });

    const beginner = dbBeginnerData.get({ plain: true });
    res.render('beginner', { beginner });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/intermediate/:id', async (req, res) => {
  try {
    const dbintermediateData = await intermediate.findByPk(req.params.id, {
      include: [
        {
          model: intermediate,
          attributes: [
            'id',
            'title',
            'author',
            'cost',
          ],
        },
      ],
    });

    const intermediate = dbintermediateData.get({ plain: true });
    res.render('intermediate', { intermediate  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/advanced/:id', async (req, res) => {
  try {
    const dbadvancedData = await advanced.findByPk(req.params.id, {
      include: [
        {
          model: advanced,
          attributes: [
            'id',
            'title',
            'author',
            'cost',
          ],
        },
      ],
    });

    const advanced = dbadvancedData.get({ plain: true });
    res.render('advanced', { advanced });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one Beginner book 
router.get('/book/:id', async (req, res) => {
  try {
    const dbbeginnerData = await Book.findByPk(req.params.id);

    const beginnerBook = dbbeginnerData.get({ plain: true });
    res.render('book', {beginnerBook, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Get one intermediate Book
router.get('/book/:id', async (req, res) => {
  try {
    const dbintermediateData = await Book.findByPk(req.params.id);

    const intermediateBook = dbintermediateData.get({ plain: true });
    res.render('book', {intermediateBook, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Get one advanced Book
router.get('/book/:id', async (req, res) => {
  try {
    const dbadvancedData = await Book.findByPk(req.params.id);

    const advancedBook = dbadvancedData.get({ plain: true });
    res.render('book', {advancedBook, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
