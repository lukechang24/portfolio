import React, { Component } from "react"
import S from "./style"
import Hackathon from "../../images/hackathon.PNG"
import snakeGame from "../../images/snake-game.PNG"
import tomagotchi from "../../images/tomagotchi.PNG"
import fixYourCode from "../../images/fix-your-code.PNG"
import gameReviews from "../../images/game-reviews.PNG"
import drawingGame from "../../images/drawing-game.PNG"

class Projects1 extends Component {
    checkScroll = () => {
        const projects = document.querySelectorAll(".project")
        projects.forEach((project,i) => {
            if(project.offsetTop < window.pageYOffset+600) {
                project.style.opacity = 1
                project.style.top = 0
            }
            if(project.offsetTop < window.pageYOffset+600 && i === projects.length-1) {
                window.removeEventListener("scroll", this.checkScroll)
            }
        })
    }
    componentDidMount() {
        window.addEventListener("scroll", this.checkScroll)
    }
    render() {
        return(
            <S.Container1>
                <S.TitleDiv>
                    <S.Title>Projects</S.Title>
                </S.TitleDiv>
                <S.ProjectContainer className="project">
                    <S.ProjectImg1 src={Hackathon}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle className="small">LA Food Policy Council Dashboard</S.ProjectTitle>
                        <S.Languages>ReactJS | NodeJS | Express | MongoDB | ApexCharts</S.Languages>
                        <S.ProjectImg2 src={Hackathon}></S.ProjectImg2>
                        <S.Description>A project assigned by the LA Food Policy Council at a hackathon hosted by General Assembly that I took part in. My team's goal was to take LA county's health statistics, such as food insecurities, and display them on the website. We worked together with a data scientist who was able to turn the data into a readable format(for the computer), which made it easier for us to allow the users to toggle through different statistics with filters.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://github.com/moonjason/LAFPC-Hackathon" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project left" left>
                    <S.ProjectImg1 src={fixYourCode}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Fix Your Code</S.ProjectTitle>
                        <S.Languages>Javascript | HTML5 | CSS | NodeJS | Express | MongoDB</S.Languages>
                        <S.ProjectImg2 src={fixYourCode}></S.ProjectImg2>
                        <S.Description>A site where you can post your broken code to get solutions from other coders. You can comment on other people's post, or like other comments to bring them to the top and make them more visible.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://fix-your-code.herokuapp.com/posts" target="_blank">Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/lukechang24/Fix-Your-Code" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project">
                    <S.ProjectImg1 src={snakeGame}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Space Snake</S.ProjectTitle>
                        <S.Languages>Javascript | HTML5 | CSS</S.Languages>
                        <S.ProjectImg2 src={snakeGame}></S.ProjectImg2>
                        <S.Description>A game based off of the classic nokia snake game with a twist. Try to collect as many stars while dodging asteroids, or shoot them for more points. Various power-ups will appear to help you survive. Running into a wall, your own body, or an asteroid will result in a game over.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://lukechang24.github.io/space-snake/" target="_blank">Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/lukechang24/space-snake" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.ProjectContainer className="project left" left>
                    <S.ProjectImg1 src={gameReviews}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Game Reviews</S.ProjectTitle>
                        <S.Languages>Javascript | ReactJS | Styled Components | Python | Flask</S.Languages>
                        <S.ProjectImg2 src={gameReviews}></S.ProjectImg2>
                        <S.Description>A game review site where you can check other users reviews on a particular game. You can search for games using the search bar, and you can also write your own review based off of your experience or knowledge.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://legendary-game-reviews.herokuapp.com/" target="_blank">Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/moonjason/legendary-game-reviews-react" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project">
                    <S.ProjectImg1 src={drawingGame}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Accurate or Naw</S.ProjectTitle>
                        <S.Languages>Javascript | ReactJS | Styled Components | Firebase</S.Languages>
                        <S.ProjectImg2 src={drawingGame}></S.ProjectImg2>
                        <S.Description>An online drawing game where you and other players create silly prompts that players will then have to draw. The players then vote whether or not a player's drawing accurately depicts his/her prompt.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://capstone-ab1a2.firebaseapp.com/lobby" target="_blank">Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/lukechang24/Accurate-or-Naw" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project left" left>
                    <S.ProjectImg1 src={tomagotchi}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Tomagotchi</S.ProjectTitle>
                        <S.Languages>Javascript | HTML5 | CSS</S.Languages>
                        <S.ProjectImg2 src={tomagotchi}></S.ProjectImg2>
                        <S.Description>A game where you take care of your pet by keeping its hunger, boredom, and sleepiness level below 10. The game runs in real time, so make sure you watch over your pet so it doesn't die.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://lukechang24.github.io/tomagotchi/" target="_blank">Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/lukechang24/tomagotchi" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
            </S.Container1>
        )
    }
}

export default Projects1