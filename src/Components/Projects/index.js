import React from "react";
import S from "./style"
import snakeGame from "../../images/snake-game.PNG"
import tomagotchi from "../../images/tomagotchi.PNG"
import fixYourCode from "../../images/fix-your-code.PNG"
import gameReviews from "../../images/game-reviews.PNG"
import drawingGame from "../../images/drawing-game.PNG"

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
                        <S.NavLink href="https://fix-your-code.herokuapp.com/posts" target="_blank">Live Site</S.NavLink>
                        <S.NavLink href="https://github.com/lukechang24/Fix-Your-Code" target="_blank">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
                <S.ProjectContainer>
                    <S.ProjectTitle>Game Reviews</S.ProjectTitle>
                    <S.ProjectImg src={gameReviews}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | ReactJS | Styled Components | Python | Flask</S.Languages>
                    </S.Container3>
                    <S.Description>A game review site where you can check other users reviews on a particular game. You can search for games using the search bar, and you can also write your own review based off of your experience or knowledge.</S.Description>
                    <S.Container4>
                        <S.NavLink href="https://legendary-game-reviews.herokuapp.com/" target="_blank">Live Site</S.NavLink>
                        <S.NavLink href="https://github.com/moonjason/legendary-game-reviews-react" target="_blank">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer>
                    <S.ProjectTitle>Accurate or Naw</S.ProjectTitle>
                    <S.ProjectImg src={drawingGame}></S.ProjectImg>
                    <S.Container3>
                        <S.Languages>Javascript | ReactJS | Styled Components | Firebase</S.Languages>
                    </S.Container3>
                    <S.Description>An online drawing game where you and other players create silly prompts that players will then have to draw. The players then vote whether or not a player's drawing accurately depicts his/her prompt.</S.Description>
                    <S.Container4>
                        <S.NavLink href="https://capstone-ab1a2.firebaseapp.com/lobby" target="_blank">Live Site</S.NavLink>
                        <S.NavLink href="https://github.com/lukechang24/Accurate-or-Naw" target="_blank">GitHub</S.NavLink>
                    </S.Container4>
                </S.ProjectContainer>
            </S.Container2>
        </S.Container1>
    )
}

export default Projects