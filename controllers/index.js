const router = require('express').Router();


const apiRoutes = require('../routes/api');
const userRoutes = require('./userRoutes.js');

const apiRoutes = require('../routes/api');
const homeRoutes = require('./homepage');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;

module.exports = router;

