const postRoute = require('./postRoute');
const signupRoute = require('./signupRoute');
const router = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const commentRoute = require('./commentRoute')


router.use('/post', postRoute);
router.use('/signup', signupRoute);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/comment', commentRoute);

module.exports = router;