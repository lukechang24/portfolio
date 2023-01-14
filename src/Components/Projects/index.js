import React from "react"
import { Route, Routes } from "react-router-dom"
import { motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"
import A from "../../Global/styled"
import S from "./style"

const Projects = () => {
  return (
    <A.Container1 
        as={motion.div} 
        initial={hidden}
        animate={visible} 
        exit={exit}
        transition={{ duration: duration }}
    >
        "hi"
    </A.Container1>
  );
}

export default Projects;