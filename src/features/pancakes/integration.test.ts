import { deepEqual, equal } from "node:assert/strict";
import request from "supertest";
import test, { describe } from "node:test";
import { createHttpApp } from "../../app";
import { createPancakesFeature } from "./feature";

function setup() {
  async function getLayersByMenuItemName() {
    return [];
  }

  const { router } = createPancakesFeature(getLayersByMenuItemName);
  const app = createHttpApp(router);

  return request(app);
}

describe("Pancakes API", () => {
  test("View all available pancakes", async () => {
    const api = setup();

    const result = await api.get("/");

    equal(result.status, 200);
    deepEqual(result.body, []);
  });

  test("Cook pancake", async () => {
    const api = setup();

    const postResult = await api
      .post("/")
      .send({ layers: ["american_pancake"] });
    const getResult = await api.get("/");

    equal(postResult.status, 201);
    equal(getResult.body[0].status, "COOKING");
    deepEqual(getResult.body[0].layers, ["american_pancake"]);
  });

  test("Cook menu item", async () => {
    async function getLayersByMenuItemName(menuItemName: string) {
      return ["crepe", menuItemName];
    }

    const { router } = createPancakesFeature(getLayersByMenuItemName);

    const app = createHttpApp(router);

    const api = request(app);

    const postResult = await api.post("/menus/apple_sauce");

    const getResult = await api.get("/");

    equal(postResult.status, 201);
    equal(getResult.body[0].status, "COOKING");
    deepEqual(getResult.body[0].layers, ["crepe", "apple_sauce"]);
  });
});
