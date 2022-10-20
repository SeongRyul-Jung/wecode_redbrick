const { busService } = require('../services');
const { catchAsync } = require('../utils/error');

const getBusStops = catchAsync(async(req, res) => {
  const { keyword } = req.params;

  const result = await busService.getBusStops(keyword);
  console.log(result)
  return res.status(200).json(result);
})

const getPassengersByLine = catchAsync(async(req, res) => {
  const { busNum } = req.query;

  const result = await busService.getPassengersByLine(busNum);
  
  return res.status(200).json(result);
})

module.exports = {
  getBusStops,
  getPassengersByLine
}