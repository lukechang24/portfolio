import React from "react"
import S from "./style"

import javascript from "../../icons/javascript.png"
import react from "../../icons/react.png"
import html5 from "../../icons/html5.png"
import css from "../../icons/css.png"
import mongodb from "../../icons/mongodb.png"
import nodejs from "../../icons/nodejs.png"
import firebase from "../../icons/firebase.png"
import github from "../../icons/github.png"

const About = () => {
    return(
        <S.Container1 id="about">
            <S.Heading>About Me</S.Heading>
            <S.BrandStatement>I am a software engineer who specializes in Javascript and React. I have a passion for creating websites with great visuals and functionality. I am able to learn quickly from resources that I have around me, and am always trying to keep up to date with the latest technologies.</S.BrandStatement>
            <S.Container2>
                <S.IconContainer>
                    <S.Icon src={javascript}></S.Icon>
                    <S.IconName>Javascript</S.IconName>
                </S.IconContainer>
                <S.IconContainer>
                    <S.Icon src={react}></S.Icon>
                    <S.IconName>ReactJs</S.IconName>
                </S.IconContainer>
                <S.IconContainer>
                    <S.Icon src={html5}></S.Icon>                    <S.IconName>HTML5</S.IconName>
                </S.IconContainer>
                <S.IconContainer>
                    <S.Icon src={css}></S.Icon>                    <S.IconName>CSS3</S.IconName>
                </S.IconContainer>
                <S.IconContainer>
                    <S.Icon src={firebase}></S.Icon>                    <S.IconName>Firebase</S.IconName>
                </S.IconContainer>
                <S.IconContainer>
                    <S.Icon src={nodejs}></S.Icon>                    <S.IconName>NodeJs</S.IconName>
                </S.IconContainer>
                <S.IconContainer>
                    <S.Icon src={github}></S.Icon>                    <S.IconName>Github</S.IconName>
                </S.IconContainer>
                <S.IconContainer>
                    <S.Icon src={mongodb}></S.Icon>                    <S.IconName>MongoDb</S.IconName>
                </S.IconContainer>
            </S.Container2>
        </S.Container1>
    )
}

export default About