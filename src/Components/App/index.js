import React, { useState } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "../Navbar"
import Home from "../Home"
import Projects from "../Projects"
import Contact from "../Contact"
import S from "./style"

const App = () => {
  const location = useLocation()
  const [index, setIndex] = useState(0) 
  const [transitionUp, setTransitionUp] = useState(false)
  
  return (
    <S.AppContainer className="App">
      <Navbar setIndex={setIndex}/>
        <S.Container>
      <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Navigate to="/home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<Projects />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
      </AnimatePresence>
        </S.Container>
    </S.AppContainer>

  );
}

export default App