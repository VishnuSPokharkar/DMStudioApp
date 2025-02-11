import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";
import Gallery from "./Gallery/Gallery";

const App: React.FC<{ name: string }> = (props) => {
  return (
    <div className="App">
      <Home title="Home Page"></Home>
      <Gallery title="Gallery Page"></Gallery>
      <Contact title="Contact Us"></Contact>
      <About title="About Us"></About>
      <Testimonials title="Testimonials"></Testimonials>
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
