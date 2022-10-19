const newsService = require('../services/newsService');
const { catchAsync } = require('../utils/error');


const getNews = catchAsync(async (req, res) => {

    const { year, category } = req.params;

    const newsInfo = await newsService.getNews(category, year);

    return res.status(200).json({ data :  newsInfo });
  
})


module.exports = {
    getNews
}