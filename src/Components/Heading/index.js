import React from "react"
import Nav from "../Nav"
import About from "../About"
import lukas from "../../images/lukas.png"

import S from "./style"

const HeadingPage = () => {
    return(
        <S.Container1>
            <Nav />
            <S.IntroDiv>
                <S.Decoration></S.Decoration>
                <S.IntroText1><S.Small>Hi, my name is</S.Small><br/> Luke Chang,</S.IntroText1>
                <S.IntroText2>I am a software engineer specializing in Javascript and React.</S.IntroText2>
            </S.IntroDiv>
            <S.Picture src={lukas}></S.Picture>
        </S.Container1>
    )
}

export default HeadingPage