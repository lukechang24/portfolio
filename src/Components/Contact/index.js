import React from "react"
import { Route, Routes } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"
import S from "./style"

const Contact = () => {
  return (
    <S.ContactContainer 
      as={motion.div} 
      initial={hidden}
      animate={visible} 
      exit={exit}
      transition={{ duration: duration }}
    >
        "hi"
    </S.ContactContainer>
  );
}

export default Contact;