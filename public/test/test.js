
const request = require("supertest");
const { createApp } = require("../app");

describe("GET News", () => {
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

});