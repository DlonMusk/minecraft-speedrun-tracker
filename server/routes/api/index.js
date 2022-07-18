const router = require('express').Router();

const seedRoutes = require('./seedRoutes')
const uploadRoutes = require('./uploadRoutes');

router.use('/seed', seedRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;