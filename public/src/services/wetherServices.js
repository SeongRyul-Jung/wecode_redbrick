const fetch = require("node-fetch");

const shortTerm = async (pageNo, numOfRows, base_date, base_time, nx, ny) => {
  const serviceKey = process.env.PUBLIC_KEY;
  console.log(serviceKey);
  const result = await fetch(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?dataType=JSON&serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return data;
};

const airForecast = async (numOfRows, pageNo, fctm, icaoCode) => {
  const serviceKey = process.env.PUBLIC_KEY;

  const result = await fetch(
    `http://apis.data.go.kr/1360000/AirInfoService/getAirInfo?dataType=JSON&serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&fctm=${fctm}&icaoCode=${icaoCode}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return data;
};

module.exports = {
  shortTerm,
  airForecast,
};
