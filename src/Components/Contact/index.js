import React from "react"
import { Route, Routes } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"
import A from "../../Styled/style"
import S from "./style"

const Contact = () => {
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

export default Contact;