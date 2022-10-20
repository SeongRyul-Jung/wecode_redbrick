const express = require("express");
const router = express.Router();

const newsRouter = require('./newsRouter')
const metroRouter = require("./metroRouter");
const busRouter = require('./busRouter');

router.use('/news', newsRouter);
router.use("/metro", metroRouter);
router.use('/bus', busRouter);

module.exports = router;
