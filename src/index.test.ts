import { deepEqual } from "node:assert/strict";
import test from "node:test";
import request from "supertest";
import { createApp } from "./app";

test("GET /status", async () => {
  const app = createApp();

  const result = await request(app).get("/status");

  deepEqual(result.status, 200);
  deepEqual(result.body, { status: "ready" });
});

test("GET /api/v1/pancakes", async () => {
  const app = createApp();

  const result = await request(app).get("/api/v1/pancakes");

  deepEqual(result.status, 200);
  deepEqual(result.body, []);
});

test("POST /api/v1/pancakes", async () => {
  const app = createApp();

  const result = await request(app).post("/api/v1/pancakes");

  deepEqual(result.status, 200);
  deepEqual(result.body, { id: -1 });
});
