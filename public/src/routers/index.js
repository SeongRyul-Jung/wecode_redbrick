const express = require("express");

const router = express.Router();

const newsRouter = require("./newsRouter");
const metroRouter = require("./metroRouter");
const busRouter = require("./busRouter");
const wetherRouters = require("./wetherRouters");
const dustRouter = require("./dustRouter");

router.use("/news", newsRouter);
router.use("/metro", metroRouter);
router.use("/bus", busRouter);
router.use("/wether", wetherRouters);
router.use("/dust", dustRouter);

module.exports = router;
