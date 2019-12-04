import React from "react";
import S from "./style"
import snakeGame from "../../images/snake-game.PNG"
import tomagotchi from "../../images/tomagotchi.PNG"
import fixYourCode from "../../images/fix-your-code.PNG"
import gameReviews from "../../images/game-reviews.PNG"

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
                    <S.Description>A game based off of the classic nokia snake game with a twist. Try to collect as many stars while dodging asteroids, or shoot them for more points. Various power-ups will appear to help you survive. Running into a wall, your own body, or an asteroid will result in a game over.</S.Description>
                    <S.Container4>
                        <S.NavLink href="https://lukechang24.github.io/Space-Snake/" target="_blank">Live Site</S.NavLink>
                        <S.NavLink href="https://github.com/lukechang24/Space-Snake" target="_blank">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer>
                    <S.ProjectTitle>Tomagotchi</S.ProjectTitle>
                    <S.ProjectImg src={tomagotchi}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | HTML5 | CSS</S.Languages>
                    </S.Container3>
                    <S.Description>A game where you take care of your pet by keeping its hunger, boredom, and sleepiness level below 10. The game runs in real time, so make sure you watch over your pet so it doesn't die.</S.Description>
                    <S.Container4>
                        <S.NavLink href="https://lukechang24.github.io/tomagotchi/" target="_blank">Live Site</S.NavLink>
                        <S.NavLink href="https://github.com/lukechang24/tomagotchi" target="_blank">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer>
                    <S.ProjectTitle>Fix Your Code</S.ProjectTitle>
                    <S.ProjectImg src={fixYourCode}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | HTML5 | CSS | NodeJS | Express | MongoDb</S.Languages>
                    </S.Container3>
                    <S.Description>A site where you can post your broken code to get solutions from other coders. You can comment on other people's post, or like other comments to bring them to the top and make them more visible.</S.Description>
                    <S.Container4>
                        <S.NavLink href="">Live Site</S.NavLink>
                        <S.NavLink href="">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer>
                    <S.ProjectTitle>Game Reviews</S.ProjectTitle>
                    <S.ProjectImg src={gameReviews}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | ReactJS | Styled Components | Python | Flask</S.Languages>
                    </S.Container3>
                    <S.Description>A site where you can post your broken code to get solutions from other coders. You can comment on other people's post, or like other comments to bring them to the top and make them more visible.</S.Description>
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