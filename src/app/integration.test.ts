import { deepEqual, equal } from "node:assert/strict";
import test, { describe } from "node:test";
import request from "supertest";
import { createApp } from ".";
import { Router } from "express";

describe("App", () => {
  test("GET /status", async () => {
    const apiRouter = Router();
    const app = createApp(apiRouter);

    const result = await request(app).get("/status");

    equal(result.status, 200);
    deepEqual(result.body, { status: "ready" });
  });

  test("GET /custom", async () => {
    const customRouter = Router();
    customRouter.get("/custom", (_, res) => {
      res.sendStatus(200);
    });

    const app = createApp(customRouter);

    const result = await request(app).get("/custom");

    equal(result.status, 200);
  });
});
