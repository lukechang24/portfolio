import React from "react"
import { Route, Routes } from "react-router-dom"
import { motion } from "framer-motion"

import luke from "../../Images/headshot.jpg"
import download from "../../Icons/download.png"
import resume from "./Luke-Chang-Resume.pdf"
import { hidden, visible, exit, duration } from "../../Animations"

import A from "../../Global/styled"
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
      <S.AboutContainer>
        <A.Title>Hi, I'm Luke.</A.Title>
        <S.About>I am a frontend developer with a passion for creating visually appealing and user-friendly websites. I have experience with a variety of frontend technologies including HTML, CSS, JavaScript, and jQuery. I have a strong understanding of responsive design and am skilled in creating mobile-friendly websites. I also have experience with frontend frameworks such as React and Next.js.</S.About>
        <S.About><A.Blue>In addition to my technical skills, I am a creative problem-solver and a team player. I am always looking for ways to improve the user experience and am open to feedback and suggestions. I am excited to continue learning and growing as a developer and am eager to take on new challenges.</A.Blue></S.About>
        <S.About><A.Blue>Please take a look at my portfolio to see some of my past projects and feel free to contact me if you have any questions or would like to discuss a project further.</A.Blue></S.About>
        <A.RowDiv justifyContent="space-between">
          <A.ColumnDiv justifyContent="space-between">
            <S.Location><A.Bold>BASED IN</A.Bold><br /><A.Blue>Cerritos, CA</A.Blue></S.Location>
            <S.ResumeContainer href={resume} target='_blank' rel='noopener noreferrer'>
              <S.Resume>RESUME</S.Resume>
              <S.Icon src={download}></S.Icon>
            </S.ResumeContainer>
          </A.ColumnDiv>
          {/* <S.ProfilePic src={luke}></S.ProfilePic> */}
        </A.RowDiv>
        <S.SocialContainer>
          <S.Link href="https://github.com/lukechang24/" target="_blank">
            <S.SocialMedia className="fa-brands fa-github"></S.SocialMedia>
          </S.Link>
          <S.Link href="https://www.linkedin.com/in/lukechang24/" target="_blank">
            <S.SocialMedia className="fa-brands fa-linkedin"></S.SocialMedia>
          </S.Link>
        </S.SocialContainer>
      </S.AboutContainer>
    </A.Container1>
  );
}

export default About;