import React from "react"
import Nav from "../Nav"
import About from "../About"

import S from "./style"

const HeadingPage = () => {
    return(
        <S.Container1>
            <Nav />
                <S.IntroDiv>
                <S.IntroText1><S.Small>Hi, my name is</S.Small><br/> Luke Chang,</S.IntroText1>
                <S.IntroText2>I am a software engineer specializing in Javascript and React.</S.IntroText2>
            </S.IntroDiv>
        </S.Container1>
    )
}

export default HeadingPage