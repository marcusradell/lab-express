import { deepEqual } from "node:assert/strict";
import test, { describe } from "node:test";
import { cook } from "./logic";

describe("Pancakes logic", () => {
  describe("Cook", () => {
    test("Pancake must have at least one layer", () => {
      const id = "mock-id-123";
      const startTimestamp = 1000;
      const layers = [];

      const result = cook(id, startTimestamp, layers);

      deepEqual(result, { status: "INVALID", error: { code: "NO_LAYERS" } });
    });

    test("Pancake with single layer", () => {
      const id = "mock-id";
      const startTimestamp = 0;
      const layers = ["crepe"];

      const result = cook(id, startTimestamp, layers);

      deepEqual(result, { id, startTimestamp, layers, status: "COOKING" });
    });
  });
});
