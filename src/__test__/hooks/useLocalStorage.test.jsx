/* ECP: https://docs.google.com/spreadsheets/d/1vSd0tqcu37J_VnGNFWBo539Jf81KG7oTs-XC5LR0MCg/edit?usp=sharing */
// libs
import { describe, expect, test, beforeEach } from "@jest/globals";
import { renderHook } from "@testing-library/react";
// hooks
import useLocalStorage from "@/hooks/useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => window.localStorage.clear());

  test("data no existing", () => {
    // arrange
    const key = "lang";
    const initialValue = "vi";
    const output = "vi";
    // action
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    // assert
    expect(result.current[0]).toBe(output);
    expect(typeof result.current[1]).toBe("function");
  });

  test("data existing", () => {
    // arrange
    const key = "lang";
    const initialValue1 = "en";
    const initialValue2 = "vi";
    const output = "vi";
    // action
    renderHook(() => useLocalStorage(key, initialValue1));
    const { result } = renderHook(() => useLocalStorage(key, initialValue2));
    // assert
    expect(result.current[0]).toBe(output);
    expect(typeof result.current[1]).toBe("function");
  });
});
