import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { vi } from "vitest";

import { useDebounce } from "../hooks/useDebounced";

vi.useFakeTimers();

test("use-debounced", async () => {
  const delay = 100;
  const hook = renderHook(({ value }) => useDebounce(value, delay), {
    initialProps: { value: 10 },
  });

  expect(hook.result.current).toBe(10);

  act(() => {
    vi.runAllTimers();
  });

  expect(hook.result.current).toBe(10);

  hook.rerender({ value: 100 });

  expect(hook.result.current).toBe(10);

  act(() => {
    vi.runAllTimers();
  });

  expect(hook.result.current).toBe(100);
});
