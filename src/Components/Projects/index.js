import React from "react"
import { Route, Routes } from "react-router-dom"
import { motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"
import S from "./style"

const Projects = () => {
  return (
    <S.ProjectsContainer 
        as={motion.div} 
        initial={hidden}
        animate={visible} 
        exit={exit}
        transition={{ duration: duration }}
    >
        "hi"
    </S.ProjectsContainer>
  );
}

export default Projects;