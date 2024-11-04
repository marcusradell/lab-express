import { deepEqual } from "node:assert/strict";
import test from "node:test";
import request from "supertest";
import { createApp } from "./app";
import { Router } from "express";
import { createApiRouter } from "./app/api-router";

test("GET /status", async () => {
  const apiRouter = Router();
  const app = createApp(apiRouter);

  const result = await request(app).get("/status");

  deepEqual(result.status, 200);
  deepEqual(result.body, { status: "ready" });
});

test("GET /api/v1/pancakes", async () => {
  const app = createApp(createApiRouter());

  const result = await request(app).get("/api/v1/pancakes");

  deepEqual(result.status, 200);
  deepEqual(result.body, []);
});

test("POST /api/v1/pancakes", async () => {
  const app = createApp(createApiRouter());

  const postResult = await request(app)
    .post("/api/v1/pancakes")
    .send({ layers: [] });

  const getResult = await request(app).get("/api/v1/pancakes");

  deepEqual(postResult.status, 201);
  deepEqual(getResult.body[0].layers, []);
});
