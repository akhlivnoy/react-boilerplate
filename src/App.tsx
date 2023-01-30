import "./App.css";

import { useState } from "react";

import reactLogo from "#assets/react.svg";
import { HomePage } from "#pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HomePage />

      <div>
        <img alt="Vite logo" className="logo" src="/vite.svg" />
        <img alt="React logo" className="logo react" src={reactLogo} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
