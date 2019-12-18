import React from 'react';
import logo from './logo.svg';
import Heading from "./Components/Heading"
import Projects from "./Components/Projects"
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <Heading />
      <About />
      <Projects />
    </div>
  );
}

export default App;
