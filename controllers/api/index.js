const router = require('express').Router();

const userRoutes = require('./user-routes');
const advancedRoutes = require('./advancedRoutes');
const intermediateRoutes = require('./intermediateRoutes');
const beginnerRoutes = require('./beginnerRoutes');

router.use('/users', userRoutes);

router.use('/advanced', advancedRoutes);
router.use('/intermediate', intermediateRoutes);
router.use('/beginner', beginnerRoutes);

module.exports = router;