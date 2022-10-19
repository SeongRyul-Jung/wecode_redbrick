let getMetroInfo = async (currentStation) => {
  let reqInfoApi = await fetch(
    `http://swopenapi.seoul.go.kr/api/subway/${process.env.SEOUL_METRO_KEY}/json/realtimeStationArrival/0/10/${currentStation}`,
    {
      method: "get",
    }
  );

  let result = await reqInfoApi.json();
  if (!result.errorMessage) {
    const err = new Error("PLEASE_CHECK_STAION_NAME");
    err.statusCode = 400;
    throw err;
  } else {
    return await result.realtimeArrivalList;
  }
};

let getPassengerInfo = async (currentStation) => {
  const getDate = new Date();
  const year = getDate.getFullYear();
  const month = getDate.getMonth();
  const day = getDate.getDate();
  let dayMonthago = `${year}${month >= 10 ? month : "0" + month}`;

  let reqInfoApi = await fetch(
    `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_KEY}/json/CardSubwayTime/0/10/${dayMonthago}/2호선/${currentStation}`,
    {
      method: "get",
    }
  );

  let result = await reqInfoApi.json();

  if (result.CardSubwayTime.RESULT.CODE) {
    let row = result.CardSubwayTime.row[0];
    for (key in row) {
      if (typeof row[key] == "number") {
        row[key] = Math.round(row[key] / 30);
      }
    }
    return await row;
  } else {
    const err = new Error("PLEASE_CHECK_STAION_NAME");
    err.statusCode = 40;
    throw err;
  }
};

module.exports = { getMetroInfo, getPassengerInfo };
