import React from "react";
import S from "./style"
import snakeGame from "../../images/snake-game.PNG"
import tomagotchi from "../../images/tomagotchi.PNG"
import FixYourCode from "../../images/fix-your-code.PNG"

function Projects() {
    return(
        <S.Container1>
            <S.TitleDiv>
                <S.Title>Projects</S.Title>
            </S.TitleDiv>
            <S.Container2>
                <S.ProjectContainer>
                    <S.ProjectTitle>Space Snake</S.ProjectTitle>
                    <S.ProjectImg src={snakeGame}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | HTML5 | CSS</S.Languages>
                    </S.Container3>
                    <S.Container4>
                        <S.NavLink href="https://lukechang24.github.io/Space-Snake/" target="_blank">Live Site</S.NavLink>
                        <S.NavLink href="https://github.com/lukechang24/Space-Snake" target="_blank">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
                <S.ProjectContainer>
                    <S.ProjectTitle>Tomagotchi</S.ProjectTitle>
                    <S.ProjectImg src={tomagotchi}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | HTML5 | CSS</S.Languages>
                    </S.Container3>
                    <S.Container4>
                        <S.NavLink href="https://lukechang24.github.io/tomagotchi/" target="_blank">Live Site</S.NavLink>
                        <S.NavLink href="https://github.com/lukechang24/tomagotchi" target="_blank">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
                <S.ProjectContainer>
                    <S.ProjectTitle>Fix Your Code</S.ProjectTitle>
                    <S.ProjectImg src={FixYourCode}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | HTML | CSS | NodeJS | Express | MongoDb</S.Languages>
                    </S.Container3>
                    <S.Container4>
                        <S.NavLink href="">Live Site</S.NavLink>
                        <S.NavLink href="">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
            </S.Container2>
        </S.Container1>
    )
}

export default Projects