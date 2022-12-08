const router = require('express').Router();
const { User, Beginner } = require('../models');
const withAuth = require('../utils/auth');
// GET all stages for homepage
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      include: [
        {
          model: Beginner,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const beginner = dbBeginnerData.map((beginner) =>
      beginner.get({ plain: true })
    );

    res.render('homepage', {
      beginner,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/beginner/:id', async (req, res) => {
  try {
    const dbBeginnerData = await Beginner.findByPk(req.params.id, {
      include: [
        {
          model: Beginner,
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

// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
