const express = require('express');
const { wetherControllers } = require('../controllers');
const router = express.Router();

router.get("/shortTerm", wetherControllers.shortTerm);
router.get("/airForecast", wetherControllers.airForecast);

module.exports = router;