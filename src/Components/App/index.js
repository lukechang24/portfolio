import React, { useState } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "../Navbar"
import NavMini from "../Navbar/NavMini"
import Home from "../Home"
import About from "../About"
import Projects from "../Projects"
import Contact from "../Contact"
import S from "./style"

const App = () => {
  const location = useLocation()
  
  return (
    <S.AppContainer className="App">
      <Navbar location={location}/>
      <NavMini location={location}/>
      <S.ContentContainer>
        <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Navigate to="/home" />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Routes>
        </AnimatePresence>
      </S.ContentContainer>
    </S.AppContainer>

  );
}

export default App