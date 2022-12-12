const router = require('express').Router();
const { Intermediate, Collection, Beginner, Advanced } = require('../models');
const withAuth = require('../utils/auth');
// GET all stages for homepage
router.get('/', async (req, res) => {
  try {
    const dbcollectionData = await Collection.findAll({
      include: [
        {
          model:Beginner,
          attributes: ['filename', 'description'],

          model: Intermediate,
          attributes: ['filename', 'description'],

          model: Advanced,
          attributes: ['filename', 'description'],


        },
      ],
    });

    const Collection = dbcollectionData.map((Collection) =>
      Collection.get({ plain: true })
    );

    res.render('main', {
      collectionData: dbcollectionData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET Beginner category 
router.get('/beginner/:id', async (req, res) => {
  try {
    const dbbeginnerData = await Beginner.findByPk(req.params.id, {
      include: [
        {
          model:Beginner,
          attributes: [
            'id',
            'title',
            'author',
            'cost',
          ],
        },
      ],
    });

    const Beginner = dbbeginnerData.get({ plain: true });
    res.render('beginner', {Beginner });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/intermediate/:id', async (req, res) => {
  try {
    const dbintermediateData = await Intermediate.findByPk(req.params.id, {
      include: [
        {
          model: Intermediate,
          attributes: [
            'id',
            'title',
            'author',
            'cost',
          ],
        },
      ],
    });

    const Intermediate = dbintermediateData.get({ plain: true });
    res.render('intermediate', { Intermediate  });
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

    constBeginnerBook = dbbeginnerData.get({ plain: true });
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
// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
