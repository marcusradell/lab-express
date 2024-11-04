import { deepEqual, equal } from "node:assert/strict";
import request from "supertest";
import test, { describe } from "node:test";
import { createApp } from "../../app";
import { createPancakesFeature } from "./feature";

function setup() {
  const { router } = createPancakesFeature();
  const app = createApp(router);

  return request(app);
}

describe("Pancakes API", () => {
  test("GET /", async () => {
    const api = setup();

    const result = await api.get("/");

    equal(result.status, 200);
    deepEqual(result.body, []);
  });

  test("POST /", async () => {
    const api = setup();

    const postResult = await api
      .post("/")
      .send({ layers: ["american_pancake"] });
    const getResult = await api.get("/");

    equal(postResult.status, 201);
    equal(getResult.body[0].status, "COOKING");
    deepEqual(getResult.body[0].layers, ["american_pancake"]);
  });
});
