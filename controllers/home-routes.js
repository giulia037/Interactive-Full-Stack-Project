const router = require('express').Router();
const { User, Intermediate, Collection, Beginner, Advanced } = require('../models');
// const Advanced = require('../models/Advanced');
// const Beginner = require('../models/Beginner');
// const Intermediate = require('../models/Intermediate');
const withAuth = require('../utils/auth');
// GET all stages for homepage
router.get('/', async (req, res) => 
{
  
  try {
    const dbCollectionData = await Collection.findAll({
      // include: [
      //   {
      //     model: Beginner,
      //     attributes: ['filename', 'description'],

      //     model: Intermediate,
      //     attributes: ['filename', 'description'],

      //     model: Advanced,
      //     attributes: ['filename', 'description'],


      //   },
      // ],
    });

    const collectionData = dbCollectionData.map((item) =>
     item.get({ plain: true })
    );
    console.log(collectionData)
   res.render('homepage')
    // res.render('main', {
    //   collectionData: collectionData,
    //   loggedIn: req.session.loggedIn,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// GET Beginner category 
router.get('/Beginner/:id', async (req, res) => {
  try {
    const dbBeginnerData = await Beginner.findByPk(req.params.id, {
      include: [
        {
          model: Beginner,
          attributes: [
            'id',
            'title',
            'author',
            'price',
            'audiobook',
            'bBook_id',
          ],
        },
      ],
    });

    const Beginner = dbBeginnerData.get({ plain: true });
    res.render('Beginner', { Beginner });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/Intermediate', async (req, res) => {
  try {
    const dbIntermediateData = await Intermediate.findByPk(req.params.id, {
      include: [
        {
          model: Intermediate,
          attributes: [
            'id',
            'title',
            'author',
            'price',
            'audiobook',
            'iBook_id',
          ],
        },
      ],
    });

    const Intermediate = dbIntermediateData.get({ plain: true });
    res.render('Intermediate', { Intermediate  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/Advanced', async (req, res) => {
  try {
    const dbAdvancedData = await Advanced.findByPk(req.params.id, {
      include: [
        {
          model: Advanced,
          attributes: [
            'id',
            'title',
            'author',
            'price',
            'audiobook',
            'aBook_id',

          ],
        },
      ],
    });

    const Advanced = dbAdvancedData.get({ plain: true });
    res.render('Advanced', { Advanced });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one Beginner book 
router.get('/book/:id', async (req, res) => {
  try {
    const dbBeginnerData = await Book.findByPk(req.params.id);

    const BeginnerBook = dbBeginnerData.get({ plain: true });
    res.render('book', {BeginnerBook, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Get one Intermediate Book
router.get('/book/:id', async (req, res) => {
  try {
    const dbIntermediateData = await Book.findByPk(req.params.id);

    const IntermediateBook = dbIntermediateData.get({ plain: true });
    res.render('book', {IntermediateBook, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Get one Advanced Book
router.get('/book/:id', async (req, res) => {
  try {
    const dbAdvancedData = await Book.findByPk(req.params.id);

    const AdvancedBook = dbAdvancedData.get({ plain: true });
    res.render('book', {AdvancedBook,  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// module.exports = router;
// // Login route
// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

module.exports = router;
