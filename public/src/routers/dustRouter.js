const express = require("express");
const { dustController } = require("../controllers");
const dustRouter = express.Router();

dustRouter.get("", dustController.getApi);

module.exports = dustRouter;
