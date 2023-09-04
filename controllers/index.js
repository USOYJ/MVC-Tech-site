const dashboardRoute = require('./dashboardRoute.js');
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoute.js');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoutes);

module.exports = router;