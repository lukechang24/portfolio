import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { throttle } from 'throttle-debounce'

import Navbar from "../Navbar"
import NavMini from "../Navbar/NavMini"
import Home from "../Home"
import About from "../About"
import Projects from "../Projects"
import Contact from "../Contact"
import S from "./style"

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const links = ["/home", "/about", "/projects", "/contact"]
  const [index, setIndex] = useState(0)
  const throttleScroll = throttle(150, e => {
    if (e.deltaY < 0 && index !== 0) {
      setIndex(index - 1)
    } else if (e.deltaY > 0 && index !== 3) {
      setIndex(index + 1)
    }
    navigate(links[index])
  })
  useEffect(() => {
    window.addEventListener("wheel", throttleScroll)
    return () => window.removeEventListener("wheel", throttleScroll)
  }, [index])
  useEffect(() => {
    setIndex(links.indexOf(location.pathname))
  }, [location.pathname])
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