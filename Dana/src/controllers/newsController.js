const newsService = require('../services/newsService');
const { catchAsync } = require('../utils/error');


const getNews = catchAsync(async (req, res) => {

    const { year } = req.params;

    const newsInfo = await newsService.getNews(year);

    return res.status(201).json({ data :  newsInfo });
  
})


module.exports = {
    getNews
}