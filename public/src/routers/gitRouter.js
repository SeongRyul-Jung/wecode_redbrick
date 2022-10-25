const express = require("express");
const { gitController } = require("../controllers");
const gitRouter = express.Router();

gitRouter.get("", gitController.getApi);

module.exports = gitRouter;
