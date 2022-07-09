const app = require("./app")
const request = require("supertest");


describe("testing / route", () => {
  // test / route handler
  test("should end with the Hello World!", async () => {
    const response = await request(app).get("/")

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-length"]).toBe("21");
    expect(response.headers["content-type"]).toMatch(/text\/html/);
    expect(response.text).toMatch(/Hello World!/)
  })
})