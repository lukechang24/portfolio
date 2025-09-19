import { useEffect, useState, useRef } from "react"
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const links = ["/home", "/about", "/projects", "/contact"]
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index
  const scrolling = useRef(false)

  const handleWheel = e => {
    if (scrolling.current) return
    scrolling.current = true
    requestAnimationFrame(() => {
      if (e.deltaY < 0 && indexRef.current > 0) {
        indexRef.current -= 1
      } else if (e.deltaY > 0 && indexRef.current < links.length - 1) {
        indexRef.current += 1
      }
      setIndex(indexRef.current)
      navigate(links[indexRef.current])
      setTimeout(() => { scrolling.current = false }, 1000)
    })
  }

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])

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
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </S.ContentContainer>
    </S.AppContainer>
  )
}

export default App
