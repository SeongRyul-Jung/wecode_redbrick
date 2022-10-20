
const request = require("supertest");
const { createApp } = require("../app");

describe("PUBLIC_API", () => {
  let app = createApp();

  test("FAILED: DATA_DOESN'T_EXIST", async () => {

    await request(app)
      .get("/news/corona/2017") 
      .expect(400) 
      .expect({ message: "DATA DOESN'T EXIST" });

  });

  test("SUCCESS: GET_DATA_OF_CORONA", async () => {

    await request(app)
      .get("/news/corona/2020")
      .expect(200);

  });

  test("SUCCESS: GET_DATA_OF_METABUS", async () => {

    await request(app)
      .get("/news/metabus/2007")
      .expect(200);

  });
  
  test("SUCCESS: GET_DATA_OF_METRO", async () => {

    await request(app)
      .get(encodeURI(`/metro?station=선릉`))
      .expect(200);

  });

  test("SUCCESS: GET_DATA_OF_METRO_PASSENGER", async () => {

    await request(app)
      .get(encodeURI(`/metro/passenger?station=사당역`))
      .expect(200);

  }); 

  test("FAILED: METRO_KEY_ERROR", async () => {

    await request(app)
      .get(`/metro`) 
      .expect(400) 
      .expect({ message:"PLEASE_CHECK_STAION_NAME"})

  });

  test("FAILED: METRO_KEY_ERROR_NOT_A_STATION_ON_LINE_2", async () => {

    await request(app)
      .get(encodeURI(`/metro/passenger?station=평촌역`)) 
      .expect(500) 
      .expect({ message:"Cannot read properties of undefined (reading 'RESULT')"})

  });
  
});