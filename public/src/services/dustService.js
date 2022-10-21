require("dotenv").config();

const getDust = async (SERVICE) => {
  const result = await fetch(
    `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_KEY}/json/${SERVICE}/0/5/`,
    {
      method: "GET",
    }
  );
  const data = await result.json();
  return data;
};

const getDustShelter = async (SERVICE) => {
  const result = await fetch(
    `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_KEY}/json/${SERVICE}/0/5/`,
    {
      method: "GET",
    }
  );
  const data = await result.json();
  return data;
};

module.exports = {
  getDust,
  getDustShelter,
};
