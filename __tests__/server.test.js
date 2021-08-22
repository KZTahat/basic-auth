"use strict";

const supertest = require("supertest");
const { app } = require("../src/server.js");
const request = supertest(app);
const base64 = require('base-64');

xdescribe("signup check", () => {
  test("it should return 201 status when signing up", async () => {
    //arrange
    let encodedPassword = base64.encode('4321');
    let param = `/signup/authorization: Basic test4:${encodedPassword}`;
    let status = 201;
    //act
    const response = await request.post(param);
    // .setRequestHeader()
    //assert
    expect(response.status).toBe(status);
  });
});

