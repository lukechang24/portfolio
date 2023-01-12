import React from "react"
import luke from "../../Images/luke.jpg"

import S from "./style"

const Navbar = (props) => {
  return (
    <S.NavContainer>
      <S.ProfileContainer>
        <S.ProfileDiv>
          <S.ProfileImg src="https://images.pexels.com/photos/179237/pexels-photo-179237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></S.ProfileImg>
          {/* <S.ProfileImg src={luke}></S.ProfileImg> */}
        </S.ProfileDiv>
      </S.ProfileContainer>
      <S.LinksContainer>
        <S.NavLink to="/home" onClick={() => props.setIndex(1)}>HOME</S.NavLink>
        <S.NavLink to="/about" onClick={() => props.setIndex(2)}>ABOUT</S.NavLink>
        <S.NavLink to="/projects" onClick={() => props.setIndex(3)}>PROJECTS</S.NavLink>
        <S.NavLink to="/contact" onClick={() => props.setIndex(4)}>CONTACT</S.NavLink>
      </S.LinksContainer>
    </S.NavContainer>
  );
}

export default Navbar;