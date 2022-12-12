const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require ('./api/user-routes');

router.use('/', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;