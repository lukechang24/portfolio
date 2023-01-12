import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"
import S from "./style"

const Home = (props) => {
  return (
    // <S.HomeContainer 
    //   as={motion.div}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   >
    //     <S.Title>LUKE CHANG</S.Title>
    //     <S.Container1>
    //         <S.Description><S.Dull>I am a</S.Dull> Frontend Developer</S.Description>
    //     </S.Container1>

    // </S.HomeContainer>
    <S.HomeContainer 
      as={motion.div} 
      initial={hidden}
      animate={visible} 
      exit={exit}
      transition={{ duration: duration }}
    >
        <S.Title>LUKE <S.Highlight>CHANG</S.Highlight></S.Title>
        <S.Container1>
            <S.Description>Frontend Developer</S.Description>
        </S.Container1>

    </S.HomeContainer>
  );
}

export default Home;