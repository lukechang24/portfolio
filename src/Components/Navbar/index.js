import React from "react"
import luke from "../../Images/luke.jpg"

import S from "./style"

const Navbar = (props) => {
  return (
    <S.NavContainer>
      <S.ProfileContainer>
        <S.ProfileDiv>
          <S.ProfileImg src={luke}></S.ProfileImg>
        </S.ProfileDiv>
      </S.ProfileContainer>
      <S.ButtonsContainer>
        <S.NavButtons to="/home" onClick={() => props.setIndex(1)}>HOME</S.NavButtons>
        <S.NavButtons to="/about" onClick={() => props.setIndex(2)}>ABOUT</S.NavButtons>
        <S.NavButtons to="/projects" onClick={() => props.setIndex(3)}>PROJECTS</S.NavButtons>
        <S.NavButtons to="/contact" onClick={() => props.setIndex(4)}>CONTACT</S.NavButtons>
      </S.ButtonsContainer>
    </S.NavContainer>
  );
}

export default Navbar;