import "./styles/App.css";
import layout from "./styles/layout.module.css";
import navbar from "./styles/navbar.module.css";
import reactLogo from "./assets/react.svg";

import { useState } from "react";
import { Link, Route } from "wouter";

import { Clock } from "./components/Clock";
import { DogSearch } from "./components/DogCEO/DogSearch";
import { useTime } from "./hooks/useTime";
import { GitHub } from "./components/GitHub";
import { Pokemon } from "./components/Pokemon";

function App() {
  const [count, setCount] = useState(0);
  const time = useTime();

  return (
    <div className={`App ${layout.app}`}>
      <nav className={`${layout.navbar} ${navbar.wrapper}`}>
        <ul className={navbar.links}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/dog-search">
            <a>DogCEO</a>
          </Link>

          <Link href="/cards">
            <a>Cards</a>
          </Link>
        </ul>

        <Clock time={time} />
      </nav>

      <header className={layout.header}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>
      </header>

      <main className={layout.content}>
        <Route path="/">
          <div className="count-card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </Route>

        <Route path="/dog-search">
          <DogSearch />
        </Route>

        <Route path="/cards">
          <div className={layout.cardLayout}>
            <GitHub />

            <Pokemon />
          </div>
        </Route>
      </main>
    </div>
  );
}

export default App;
