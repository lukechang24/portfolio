import React from "react"

import S from "../style"
import luke from "../../../Images/headshot.jpg"

const NavMini = (props) => {
  const isHome = props.location.pathname === "/home"
  return (
    <S.MiniNavContainer isHome={isHome}>
      <S.Headshot isHome={isHome} src={luke}></S.Headshot>
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