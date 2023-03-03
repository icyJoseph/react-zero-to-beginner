import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { vi } from "vitest";

import { handlers } from "../mocks/handlers";
import { OctoCat } from "../components/OctoCat";

const server = setupServer(...handlers);
const handlerCalled = vi.fn();

beforeAll(() => {
  server.listen({ onUnhandledRequest: "warn" });
  server.events.on("request:start", (req) => {
    const auth = req.headers.get("authorization");
    console.log({ auth });
    handlerCalled(auth);
  });
});

afterAll(() => {
  server.close();
});

test("OctoCat", async () => {
  const token = "RANDOM";

  render(<OctoCat token={token} />);

  await waitFor(() =>
    expect(screen.getByRole("heading")).toHaveTextContent(/octocat/i)
  );

  expect(handlerCalled).toHaveBeenCalledWith(`Bearer ${token}`);
});
