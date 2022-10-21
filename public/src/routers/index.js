const express = require("express");
const router = express.Router();

const newsRouter = require('./newsRouter')
const metroRouter = require("./metroRouter");
const busRouter = require('./busRouter');
const wetherRouters = require("./wetherRouters")

router.use('/news', newsRouter);
router.use("/metro", metroRouter);
router.use('/bus', busRouter);
router.use('/wether', wetherRouters)

module.exports = router;
