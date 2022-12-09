const router = require('express').Router();


// const apiRoutes = require('../routes/api');
const userRoutes = require('./api/user-routes');

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;

module.exports = router;

