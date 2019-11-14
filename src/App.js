import React from 'react';
import logo from './logo.svg';
import Nav from "./Nav"
import Projects from "./Projects"
import About from "./About"

const appStyle = {
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#C3FCFF",
}
function App() {
  return (
    <div className="App" style={appStyle}>
      <Nav />
      <div style={{"margin-top": "5rem"}}>
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default App;
