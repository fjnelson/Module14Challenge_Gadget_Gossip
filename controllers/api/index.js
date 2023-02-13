const router = require('express').Router();
const apiRoutes = require('./api/');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/api', apiRoutes);
router.use('/posts', postRoutes);
module.exports = router;