import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount((prev) => prev + 1);
  const dec = () => setCount((prev) => prev - 1);

  return (
    <div>
      <p data-testid="count">count: {count}</p>

      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </div>
  );
};

const Pokemon = ({ name }: { name: string }) => {
  const [poke, setPoke] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((res) => res.json())
      .then(setPoke);
  }, []);

  if (!poke) return <div role="alert">Loading...</div>;

  return (
    <div>
      <h1>{poke.id}</h1>
    </div>
  );
};

describe("Components", () => {
  it("Counts", async () => {
    render(<Counter />);

    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText("inc"));

    expect(screen.getByTestId("count")).toBeInTheDocument();

    await userEvent.click(screen.getByText("inc"));

    expect(screen.getByText(/count: 2/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText("dec"));

    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  it("Fetches", async () => {
    render(<Pokemon name="mew" />);

    expect(screen.getByRole("alert")).toHaveTextContent(/loading/i);

    await waitFor(() =>
      expect(screen.getByRole("heading")).toHaveTextContent("151")
    );
  });
});
