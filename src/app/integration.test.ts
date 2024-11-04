import { deepEqual } from "node:assert/strict";
import test from "node:test";
import request from "supertest";
import { createApp } from ".";
import { Router } from "express";
import { createApiRouter } from "../api-router";

test("GET /status", async () => {
  const apiRouter = Router();
  const app = createApp(apiRouter);

  const result = await request(app).get("/status");

  deepEqual(result.status, 200);
  deepEqual(result.body, { status: "ready" });
});
