import React from "react"
import S from "./style"
import logo from "../../icons/logo.png"

const Nav = () => {
    const toAbout = () => {
        const aboutDiv = document.querySelector("#about")
        console.log(aboutDiv.scrollHeight)
        window.scrollTo(0, aboutDiv.scrollHeight+50)
    }
    return(
        <S.NavBar>
            <S.LogoDiv>
                <S.Logo src={logo}></S.Logo>
            </S.LogoDiv>
            <S.NavLinkDiv>
                <S.NavLink onClick={toAbout}>About</S.NavLink>
                <S.NavLink href="https://www.linkedin.com/in/lukechang420108/" target="_blank">LinkedIn</S.NavLink>
                <S.NavLink href="https://github.com/lukechang24" target="_blank">GitHub</S.NavLink>
            </S.NavLinkDiv>
        </S.NavBar>
    )
}

export default Nav