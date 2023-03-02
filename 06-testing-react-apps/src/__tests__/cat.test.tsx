import { render, screen, waitFor } from "@testing-library/react";
import { SWRConfig } from "swr";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { vi } from "vitest";

import { handlers, CREATED_AT } from "../mocks/handlers";
import { CatPage } from "../components/Cat";
import { API_URL } from "../config";

const server = setupServer(...handlers);
const handlerCalled = vi.fn();

beforeAll(() => {
  server.listen({ onUnhandledRequest: "warn" });
  server.events.on("request:start", (req) =>
    handlerCalled(`${req.method}: ${req.url.toString()}`)
  );
});

beforeEach(() => {
  handlerCalled.mockReset();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Cats", () => {
  it("should fetch and show cats", async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
        <CatPage />
      </SWRConfig>
    );

    expect(screen.getByText("Loading cats...")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByRole("heading")).toHaveTextContent(CREATED_AT)
    );

    expect(screen.getByText("mockedTag1")).toBeInTheDocument();

    expect(handlerCalled.mock.calls.flat()).toEqual([`GET: ${API_URL}`]);
  });

  it("should handle network errors", async () => {
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res.networkError("Failed to connect");
      })
    );

    render(
      <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
        <CatPage />
      </SWRConfig>
    );

    expect(screen.getByText("Loading cats...")).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText("Error")).toBeInTheDocument());
  });
});
