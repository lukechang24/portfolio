import React, { useEffect } from "react"

import S from "./style"

const Navbar = () => {
  return (
    <S.NavContainer>
      <S.LinksContainer>
        <S.NavLink to="/home">HOME</S.NavLink>
        <S.NavLink to="/about">ABOUT</S.NavLink>
        <S.NavLink to="/projects">WORK</S.NavLink>
        <S.NavLink to="/contact">CONTACT</S.NavLink>
      </S.LinksContainer>
      <S.TitleContainer>
        <S.Name>LUKE CHANG</S.Name>
        <S.Title>Frontend Developer</S.Title>
      </S.TitleContainer>
    </S.NavContainer>
  );
}

export default Navbar;