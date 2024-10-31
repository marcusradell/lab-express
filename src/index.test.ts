import { deepEqual } from "node:assert/strict";
import test from "node:test";
import request from "supertest";
import express from "express";

const app = express();

app.get("/status", (req, res) => {
  res.json({ status: "ready" });
});

test("GET /status", async () => {
  const result = await request(app).get("/status");

  deepEqual(result.status, 200);
  deepEqual(result.body, { status: "ready" });
});
