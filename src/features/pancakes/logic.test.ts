import { deepEqual } from "node:assert/strict";
import test, { describe } from "node:test";
import { cook } from "./logic";

describe("Pancakes logic", () => {
  describe("Cook", () => {
    test("Single layer", () => {
      const id = "mock-id";
      const startTimestamp = 0;
      const layers = ["crepe"];

      const result = cook(id, startTimestamp, layers);

      deepEqual(result, { id, startTimestamp, layers });
    });
  });
});
