const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const beginnerRoutes = require('./beginnerRoutes');
const intermediateRoutes = require('./intermediateRoutes');
const advancedRoutes = require('./advancedRoutes')


router.use('./home', homeRoutes);
router.use('./beginner', beginnerRoutes);
router.use('./intermediate', intermediateRoutes);
router.use('./advanced', advancedRoutes);

module.exports = router;