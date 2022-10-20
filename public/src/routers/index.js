const express = require('express')
const router = express.Router();

newsRouter = require('./newsRouter')

router.use('/news', newsRouter);

module.exports = router;