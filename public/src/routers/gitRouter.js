const express = require("express");
const { gitController } = require("../controllers");
const gitRouter = express.Router();

gitRouter.get("/pr", gitController.getPr);
gitRouter.get("/comment", gitController.getPrComment);
gitRouter.get("/review", gitController.getPrReview);

module.exports = gitRouter;
