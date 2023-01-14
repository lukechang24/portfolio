import React from "react"

import S from "./style"

const Navbar = (props) => {
  return (
    <S.NavContainer>
      <S.LinksContainer>
        <S.NavLink to="/home" onClick={() => props.setIndex(1)}>HOME</S.NavLink>
        <S.NavLink to="/about" onClick={() => props.setIndex(2)}>ABOUT</S.NavLink>
        <S.NavLink to="/projects" onClick={() => props.setIndex(3)}>WORK</S.NavLink>
        <S.NavLink to="/contact" onClick={() => props.setIndex(4)}>CONTACT</S.NavLink>
      </S.LinksContainer>
      <S.TitleContainer>
        <S.Name>LUKE CHANG</S.Name>
        <S.Title>Frontend Developer</S.Title>
      </S.TitleContainer>
    </S.NavContainer>
  );
}

export default Navbar;