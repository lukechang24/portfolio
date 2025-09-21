import { motion } from "framer-motion"

import download from "../../Icons/download.png"
import resume from "./luke_chang_resume.pdf"
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

        <S.About>
          I’m a Frontend Developer passionate about building clean, interactive, and user-friendly web experiences. 
          I have hands-on experience with JavaScript, React, Next.js, HTML, and CSS, and a strong understanding of responsive design for mobile and desktop platforms.
        </S.About>

        <S.About>
          <A.Blue>
            My projects include full-stack applications, like an online ordering system for a family-owned restaurant, 
            and data visualization tools built during research programs. I thrive on solving complex problems and collaborating with teams to deliver polished products.
          </A.Blue>
        </S.About>

        <S.About>
          <A.Blue>
            Check out my portfolio to see examples of my work, and feel free to reach out to discuss potential projects or collaborations.
          </A.Blue>
        </S.About>

        <A.RowDiv justifyContent="space-between">
          <A.ColumnDiv justifyContent="space-between">
            <S.Location>
              <A.Bold>BASED IN</A.Bold><br />
              <A.Blue>Cerritos, CA</A.Blue>
            </S.Location>

            <S.ResumeContainer href={resume} target='_blank' rel='noopener noreferrer'>
              <S.Resume>RESUME</S.Resume>
              <S.Icon src={download}></S.Icon>
            </S.ResumeContainer>
          </A.ColumnDiv>
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
  )
}

export default About
