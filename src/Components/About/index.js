import React from "react"
import { Route, Routes } from "react-router-dom"
import { motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"

import A from "../../Styled/style"
import S from "./style"

const About = () => {
  return (
    <A.Container 
        as={motion.div} 
        initial={hidden}
        animate={visible} 
        exit={exit}
        transition={{ duration: duration }}
    >
        <A.Title>About Me.</A.Title>
    </A.Container>
  );
}

export default About;