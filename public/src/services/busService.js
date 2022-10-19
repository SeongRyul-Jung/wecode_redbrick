const fetch = require('node-fetch')

const getBusStops = async(keyword) => {
  let busStopInfo = await fetch(
    `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_KEY}/json/busStopLocationXyInfo/1/5/${keyword}`,
    {
      method : "get"
    }
  );
  
  const response = await busStopInfo.json();

  if (!response.busStopLocationXyInfo) {
    const err = new Error("유효하지 않은 정보입니다.");
    err.statusCode = 400;
    throw err;
  } else {
    return await response["busStopLocationXyInfo"]["row"];
  };
};

const getPassengersByLine = async(busNum) => {
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = '0' + today.getMonth();
  const yyyymm = String(thisYear + thisMonth);

  let howManyPassenger = await fetch(
    `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_KEY}/json/CardBusTimeNew/1/5/${yyyymm}/${busNum}`,
    {
      method : "get"
    }
  );

  const response = await howManyPassenger.json();

  if (!response.CardBusTimeNew) {
    const err = new Error("유효하지 않은 정보입니다.");
    err.statusCode = 400;
    throw err;
  } else {
    const coreInfo = response["CardBusTimeNew"]["row"]
    let result = [];

    for(let i = 0; i < coreInfo.length; i++) {
      result[i] = {
      ["버스정류장명"] : coreInfo[i]["BUS_STA_NM"],
      ["6시 하차 승객 수"] : coreInfo[i]["SIX_ALIGHT_NUM"],
      ["6시 승차 승객 수"] : coreInfo[i]["SIX_RIDE_NUM"],
      ["7시 승차 승객 수"] : coreInfo[i]["SEVEN_RIDE_NUM"],
      ["7시 하차 승객 수"] : coreInfo[i]["SEVEN_ALIGHT_NUM"],
      ["8시 승차 승객 수"] : coreInfo[i]["EIGHT_RIDE_NUM"],
      ["8시 하차 승객 수"] : coreInfo[i]["EIGHT_ALIGHT_NUM"],
      ["9시 승차 승객 수"] : coreInfo[i]["NINE_RIDE_NUM"],
      ["9시 하차 승객 수"] : coreInfo[i]["NINE_ALIGHT_NUM"]
      };
  };
  return result;
  };
};

module.exports = {
  getBusStops,
  getPassengersByLine
};