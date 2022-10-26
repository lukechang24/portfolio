import React from "react"
import { Route, Routes } from "react-router-dom"

import Navbar from "../Navbar"
import Home from "../Home"
import S from "./style"

const App = () => {
  return (
    <S.AppContainer className="App">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </S.AppContainer>
  );
}

export default App;
