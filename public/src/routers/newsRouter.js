
const router = require('express').Router();
const newsController = require('../controllers/newsController');

router.get('/:category/:year', newsController.getNews);

module.exports = router;