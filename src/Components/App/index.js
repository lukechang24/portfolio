import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"

import Navbar from "../Navbar"
import Home from "../Home"
import Contact from "../Contact"
import S from "./style"

const App = () => {
  return (
    <S.AppContainer className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </S.AppContainer>
  );
}

export default App