import React from "react"

import S from "../style"

const NavMini = (props) => {
  const isHome = props.location.pathname === "/home"
  return (
    <S.MiniNavContainer isHome={isHome}>
      <S.TitleContainer isHome={isHome}>
        <S.Name isHome={isHome}>LUKE CHANG</S.Name>
        <S.Title>Frontend Developer</S.Title>
      </S.TitleContainer>
      <S.LinksContainer isHome={isHome}>
        <S.NavLink to="/home">HOME</S.NavLink>
        <S.NavLink to="/about">ABOUT</S.NavLink>
        <S.NavLink to="/projects">WORK</S.NavLink>
        <S.NavLink to="/contact">CONTACT</S.NavLink>
      </S.LinksContainer>
    </S.MiniNavContainer>
  );
}

export default NavMini;