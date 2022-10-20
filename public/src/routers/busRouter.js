const express = require('express');
const { busController } = require('../controllers');
const busRouter = express.Router();

busRouter.get('/stop/:keyword', busController.getBusStops);
busRouter.get('/passenger', busController.getPassengersByLine);

module.exports = busRouter;