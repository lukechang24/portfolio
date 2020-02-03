import React from 'react';
import logo from './logo.svg';
import Heading from "./Components/Heading"
import Projects from "./Components/Projects"
import Projects1 from "./Components/Projects1"
import About from "./Components/About"

const App = () => {
  return (
    <div className="App">
      <Heading />
      <About />
      <Projects />
      <Projects1 />
    </div>
  );
}

export default App;
