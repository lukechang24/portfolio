import React, { useState, useRef } from "react"
import emailjs from 'emailjs-com';
import { Route, Routes } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { hidden, visible, exit, duration } from "../../Animations"
import A from "../../Global/styled"
import S from "./style"

const Contact = () => {
  const form = useRef();
  const [show, setShow] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current.from_email)
    emailjs.sendForm('gmail', 'template_owph87a', form.current, 'khA948AvsgviGeZ2V')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setShow(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <A.Container1 
      as={motion.div} 
      initial={hidden}
      animate={visible} 
      exit={exit}
      transition={{ duration: duration }}
    >
      <S.ContactContainer>
        <A.Title>Let's get in touch.</A.Title>
        <S.ContactForm ref={form} onSubmit={sendEmail}>
          <S.Input type="text" name="from_name" placeholder="Name..." />
          <S.Input type="email" name="from_email" placeholder="Email..." />
          <S.Textarea name="message" placeholder="Message..." />
          <S.Submit show={show} type="submit" value="SUBMIT">SUBMIT</S.Submit>
          <S.Sent show={show}>SENT!</S.Sent>
        </S.ContactForm>
        <A.RowDiv>
          <S.InfoContainer>
            <S.Icon className="fa-solid fa-phone"></S.Icon>
            <S.Info>(562) 706 - 3613</S.Info>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.Icon className="fa-solid fa-envelope"></S.Icon>
            <S.Info>luk3chang.dev@gmail.com</S.Info>
          </S.InfoContainer>
        </A.RowDiv>
      </S.ContactContainer>
    </A.Container1>
  );
}

export default Contact;