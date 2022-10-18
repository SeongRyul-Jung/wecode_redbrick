
const { metroService } = require("../services");
const { catchAsync } = require("../middleware/error");

const getMetroInfo = catchAsync(async (req, res, next) => {
  if (!req.query.station) {
    let err = new Error("PLEASE_CHECK_STAION_NAME");
    next(err);
  } else {
    let currentStation = req.query.station;
    if (currentStation.endsWith("역") == true) {
      currentStation = currentStation.replace(/역$/, "");
    }
    let reqInfoApi = await fetch(
      `http://swopenapi.seoul.go.kr/api/subway/${process.env.METRO_KEY}/json/realtimeStationArrival/1/5/${currentStation}`,
      {
        method: "get",
      }
    );
    let result = await reqInfoApi.json();
    return res.status(200).json(result);
  }
});

module.exports = {
  getMetroInfo,
};
