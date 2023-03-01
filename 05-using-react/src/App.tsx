import { useState } from "react";
import { AddItem } from "./components/AddItem";
import { Clock } from "./components/Clock";
import { TodoList } from "./components/TodoList";
import { useMouseXY } from "./hooks/useMouseXY";
import { useTime } from "./hooks/useTime";

function getRandomInt(min = 1, max = 100) {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower) + lower);
}

const nSum = (n: number) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
};

function App() {
  const [value, setValue] = useState(() => getRandomInt());

  const time = useTime();

  const { x, y } = useMouseXY();

  const result = nSum(value);

  return (
    <>
      <header>
        <Clock time={time} />
      </header>

      <main>
        <h1>React App</h1>

        <section>
          <h2>Todo List</h2>

          <TodoList />
          <AddItem addItem={() => {}} />
        </section>
      </main>

      <footer>
        <p>{value}</p>

        <button
          onClick={() => {
            const next = getRandomInt();
            setValue(next);
          }}
        >
          random
        </button>

        <p>Sum is {result}</p>

        <p>
          Mouse: x: {x}, y: {y}
        </p>
      </footer>
    </>
  );
}

export default App;
