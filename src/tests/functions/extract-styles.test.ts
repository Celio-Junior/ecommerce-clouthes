import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { extractClassesStyles } from "@/utils/extract-styles";

describe("test com extrator de classes", () => {
  const mockTest =
    "w-full min-w-10 flex justify-center relative flex-col-reverse border rounded-xl flex-col shadow-lg";
  it("teste extract", () => {
    const actual = extractClassesStyles(mockTest, "w", "flex");
    const expected = "w-full min-w-10 flex flex-col-reverse flex-col";
    strictEqual(actual.result_searched, expected);
  });
});
