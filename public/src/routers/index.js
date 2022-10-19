const express = require("express");
const router = express.Router();

const newsRouter = require('./newsRouter')
const metroRouter = require("./metroRouter");
router.use('/news', newsRouter);
router.use("/metro", metroRouter);

module.exports = router;
