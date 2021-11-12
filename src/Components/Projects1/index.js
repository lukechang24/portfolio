import React, { Component } from "react"
import S from "./style"
import sushiGallery from "../../images/sushi-gallery.PNG"
import usic from "../../images/usic.PNG"
import hackathon from "../../images/hackathon.PNG"
import snakeGame from "../../images/snake-game.PNG"
import tomagotchi from "../../images/tomagotchi.PNG"
import fixYourCode from "../../images/fix-your-code.PNG"
import gameReviews from "../../images/game-reviews.PNG"
import drawingGame from "../../images/drawing-game.PNG"

class Projects1 extends Component {
    state = {
        showBackToTop: false
    }
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

    checkBackToTop = () => {
        if(window.scrollY >= 800) {
            this.setState({showBackToTop: true})
        } else {
            this.setState({showBackToTop: false})
        }
        console.log(window.scrollY)
    }

    backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    componentDidMount() {
        window.addEventListener("scroll", this.checkScroll)
        window.addEventListener("scroll", this.checkBackToTop)
    }
    render() {
        return(
            <S.Container1>
                <S.TitleDiv>
                    <S.Title>Projects</S.Title>
                </S.TitleDiv>
                <S.ProjectContainer className="project">
                    <S.ProjectImg1 src={sushiGallery}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Sushi Gallery</S.ProjectTitle>
                        <S.Languages>Javascript | HTML5 | CSS | ReactJS | Firebase</S.Languages>
                        <S.ProjectImg2 src={sushiGallery}></S.ProjectImg2>
                        <S.Description>A website I created for my parent's restaurant, Sushi Gallery. It showcases a menu with images and an about section, along with access to online delivery through food apps such as postmates. To allow my parents to tweak the menu themselves without the need to code, all of the data for the menu comes from a google sheets document. I used an npm package called Tabletop.js, which allows me to send the google sheet document as JSON object for my website to use.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://sushi-gallery.firebaseapp.com/menu" target="_blank">Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/lukechang24/Sushi-Gallery" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project left" left>
                    <S.ProjectImg1 src={usic}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Usic Website</S.ProjectTitle>
                        <S.Languages>Javascript | HTML5 | CSS | ReactJS | Redux</S.Languages>
                        <S.ProjectImg2 src={usic}></S.ProjectImg2>
                        <S.Description>A website dedicated to helping record labels find unsigned artist. I worked as a freelance software engineer to help implement new features, fix bugs, and organize the general codebase. Redux was used all throughout this project, as it made state management much easier with all the information that needed to be passed through the components.</S.Description>
                        <S.Container4>
                            <S.NavLink href="javascript: void(0)" disabled>Live Site</S.NavLink>
                            <S.NavLink href="javascript: void(0)" disabled>Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project">
                    <S.ProjectImg1 src={hackathon}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle className="small">LA Food Policy Council Dashboard</S.ProjectTitle>
                        <S.Languages>ReactJS | NodeJS | Express | MongoDB | ApexCharts</S.Languages>
                        <S.ProjectImg2 src={hackathon}></S.ProjectImg2>
                        <S.Description>A project assigned by the LA Food Policy Council at a hackathon hosted by General Assembly that I took part in. My team's goal was to take LA county's health statistics, such as food insecurities, and display them on the website. We worked together with a data scientist who was able to turn the data into a readable format(for the computer), which made it easier for us to allow the users to toggle through different statistics with filters.</S.Description>
                        <S.Container4>
                            <S.NavLink href="javascript: void(0)" disabled>Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/moonjason/LAFPC-Hackathon" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project left" left>
                    <S.ProjectImg1 src={drawingGame}></S.ProjectImg1>
                    <S.Container3>
                        <S.ProjectTitle>Accurate or Naw</S.ProjectTitle>
                        <S.Languages>Javascript | ReactJS | Styled Components | Firebase</S.Languages>
                        <S.ProjectImg2 src={drawingGame}></S.ProjectImg2>
                        <S.Description>An online drawing game where you and other players create randomized silly prompts that you have to draw as accurately as possible. While each players' drawings are being presented, the others must try and match their prompt from a word bank, and are awarded points based off how much of the prompt they matched. Players are provided with a canvas to draw on with multiple color options, an undo button, and an eraser. You can also message with players through the games live chat system.</S.Description>
                        <S.Container4>
                            <S.NavLink href="https://capstone-ab1a2.firebaseapp.com/lobby" target="_blank">Live Site</S.NavLink>
                            <S.NavLink href="https://github.com/lukechang24/Accurate-or-Naw" target="_blank">Github</S.NavLink>
                        </S.Container4>
                    </S.Container3>
                </S.ProjectContainer>
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project">
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
                <S.ProjectContainer className="project left" left>
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
                <S.LineBreak></S.LineBreak>
                <S.ProjectContainer className="project">
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
                <S.BackToTop className={this.state.showBackToTop ? "" : "hide"} onClick={() => {this.backToTop()}}>
                    <S.Icon className="fas fa-caret-up"></S.Icon>
                    <S.Text>Top</S.Text>
                </S.BackToTop>
            </S.Container1>
        )
    }
}

export default Projects1