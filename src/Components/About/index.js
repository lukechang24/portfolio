import React from "react"
import { Route, Routes } from "react-router-dom"
import { motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"

import A from "../../Styled/style"
import S from "./style"

const About = () => {
  return (
    <A.Container1 
        as={motion.div} 
        initial={hidden}
        animate={visible} 
        exit={exit}
        transition={{ duration: duration }}
    >
      <A.Container2>
        <A.Title>About Me.</A.Title>
        <S.AboutContainer>
          <S.Container1>
            <S.Role>Frontend Developer</S.Role>
            <S.Description>I am a software engineer who is an attentive learner and unafraid to take initiative, especially in a team environment. While working under a startup, I took the responsibility to unify a codebase by replacing inconsistent CSS with styled components, improving readability and reducing the lines of code from 6000+ down to 5000. Mindful of my clients’ needs, I developed a business website that displays an interactive menu, incorporates responsive web and mobile features, and boasts a lighthouse score of 94.</S.Description>
            <S.Description>I strive to utilize my skill set to improve and succeed as a developer, focusing on adaptability and delivering organized, dependable front-end applications. You can view some of these projects in detail below.</S.Description>
          </S.Container1>
        </S.AboutContainer>
      </A.Container2>
    </A.Container1>
  );
}

export default About;