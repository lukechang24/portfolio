import React from "react"
import Nav from "../Nav"
import About from "../About"

import S from "./style"

function HeadingPage() {
    return(
        <S.Container1>
            <Nav />
                <S.IntroDiv>
                <S.IntroText1>Hello,</S.IntroText1>
                <S.IntroText2>I am a software engineer specializing in mainly Javascript and related frameworks.</S.IntroText2>
            </S.IntroDiv>
        </S.Container1>
    )
}

export default HeadingPage