import React from "react"
import profPic from "../prof-pic.png"

const aboutText = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
}


function About() {
    return(
        <div style={aboutText}>
            <img style={{"height": "20rem", "border-radius": "100px", "margin": "3rem"}} src={profPic}></img>
            <p style={{"width": "60%", "font-size": "2rem"}}>I am a software engineer specializing in mainly JS and related frameworks. With my skills in javascript, I’m able to turn most of my ideas into realities, whether it be for a game or a simple website. My drive to code is the satisfaction I receive from solving a challenge that I spend hours on, or finally completing a project. I am able to learn quickly from resources that I have around me, and am always trying to keep up to date with the latest technologies.</p>
        </div>
    )
}

export default About