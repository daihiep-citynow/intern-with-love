// hooks
import { localesList } from "@/hooks/useLocales";

describe("useLocales", () => {
  test("localesList", () => {
    // arrange (mock input yet)
    const output = ["vi", "en"];
    // action
    // assert
    expect(localesList.toString()).toBe(output.toString());
  });
});
/*
Chua tim ra cac // mock locales import
*/
