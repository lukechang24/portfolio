import styled, { keyframes } from "styled-components"
import home from "../../Images/home.jpg"

const slideInFromTop = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`

/* The typing effect */
const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`

  /* The typewriter cursor effect */
const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: white; }
`

const S = {}

S.HomeContainer = styled.div`
    font-family: 'Libre Franklin', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #273045;
    background-size: cover;
    background-image: linear-gradient(rgba(39,48,69,0.5), rgba(39,48,69,0.5)), url(${home});
    animation: 1s ease-out 0s 1 ${slideInFromTop};
    
`

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.Title = styled.h2`
    font-size: 80px;
    color: white;
    letter-spacing: 2.5px;
    margin: 24px 0;
`

S.Description = styled.h3`
    font-size: 24px;
    color: white;
    border-right: .15em solid transparent; /* The typwriter cursor */
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: 2px; /* Adjust as needed */
    animation: 
    ${typing} 3.5s steps(30, end),
    ${blinkCaret} .5s step-end 12;
`

S.Dull = styled.span`
    opacity: 70%;
    color: #BEDCEA;
` 

export default S