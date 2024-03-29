import React from "react"
import Lukas from "../../Images/Lukas.jpg"

import S from "./style"

const Navbar = () => {
  return (
    <S.NavContainer>
      <S.ProfileContainer>
        <S.ProfileDiv>
          <S.ProfileImg src={Lukas}></S.ProfileImg>
        </S.ProfileDiv>
      </S.ProfileContainer>
      <S.ButtonsContainer>
        <S.NavButtons to="/home">HOME</S.NavButtons>
        <S.NavButtons to="/about">ABOUT</S.NavButtons>
        <S.NavButtons to="/projects">PROJECTS</S.NavButtons>
        <S.NavButtons to="/contact">CONTACT</S.NavButtons>
      </S.ButtonsContainer>
    </S.NavContainer>
  );
}

export default Navbar;
