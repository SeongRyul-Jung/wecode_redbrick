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

  test("해당 키워드가 포함된 버스정류장 정보를 확인합니다.", async () => {
    await request(app)
      .get(encodeURI(`/bus/stop/강남역`))
      .expect(200)
  });

  test("Bad Request", async () => {
    await request(app)
      .get(encodeURI(`/bus/stop/강남역역`))
      .expect(400)
      .expect({ "message": "유효하지 않은 정보입니다." })
  });

  test("버스정류장명과 6~9시 승하차 승객 수를 확인합니다.", async () => {
    await request(app)
      .get("/bus/passenger?busNum=0017")
      .expect(200)
  });

  test("Bad Request", async () => {
    await request(app)
      .get("/bus/passenger?busNum=000000000")
      .expect(400)
      .expect({ "message": "유효하지 않은 정보입니다." })
  });

  test("FAILED: invalid SERVICE", async () => {
    await request(app).get("/dust?SERVICE=1").expect(400);
  });

  test("SUCCESS: GET_YEAR_DUST_INFO", async () => {
    await request(app)
      .get(encodeURI(`/dust?SERVICE=yearMicroDustInfo`))
      .expect(200);
  });

  test("SUCCESS: GET_DUSTSHELTER", async () => {
    await request(app).get(encodeURI(`/dust?SERVICE=shuntPlace`)).expect(200);
  });
});



