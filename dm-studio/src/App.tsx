import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";

const App: React.FC<{ name: string }> = (props) => {
  return (
    <div className="App">
      <Home title="Home Page"></Home>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-testid="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {props.name}. Welcome to Learn React!
        </a>
      </header>
    </div>
  );
};

export default App;
