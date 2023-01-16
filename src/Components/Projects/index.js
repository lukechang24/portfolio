import React from "react"
import { Route, Routes } from "react-router-dom"
import { motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"
import sushi from "../../Images/sushi.webp"
import drawing from "../../Images/drawing.webp"
import usic from "../../Images/usic.webp"
import hackathon from "../../Images/hackathon.webp"

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
      <S.WorksContainer>
        <S.Grid>
          <S.Project url={sushi}></S.Project>
          <S.Project url={drawing}></S.Project>
          {/* <S.Project url={usic}></S.Project>
          <S.Project url={hackathon}></S.Project> */}
          <S.Arrow className="fa-solid fa-caret-right"></S.Arrow>
        </S.Grid>
      </S.WorksContainer>
    </A.Container1>
  );
}

export default Projects;