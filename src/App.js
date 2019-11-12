import React from 'react';
import logo from './logo.svg';
import Nav from "./Nav"
import ShowPage from "./ShowPage"

const appStyle = {
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#C3FCFF"
}
function App() {
  return (
    <div className="App" style={appStyle}>
      <Nav />
      <ShowPage />
    </div>
  );
}

export default App;
