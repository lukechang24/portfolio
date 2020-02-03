import React from "react"
import S from "./style"

const Nav = () => {
    return(
        <S.NavBar>
            <S.NameDiv>
                <S.Name>Luke Chang</S.Name>
            </S.NameDiv>
            <S.NavLinkDiv>
                <S.NavLink href="#about">About</S.NavLink>
                <S.NavLink href="https://www.linkedin.com/in/lukechang420108/" target="_blank">LinkedIn</S.NavLink>
                <S.NavLink href="https://github.com/lukechang24" target="_blank">GitHub</S.NavLink>
            </S.NavLinkDiv>
        </S.NavBar>
    )
}

export default Nav