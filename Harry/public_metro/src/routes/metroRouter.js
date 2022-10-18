const router = require("express").Router();

const { metroController } = require("../controllers");

router.route("/").get(metroController.getMetroInfo)

module.exports = router;
