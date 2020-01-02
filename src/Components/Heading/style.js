import styled from "styled-components"
import HeadingImg from "../../images/origami.jpg"

const S = {}

S.Container1 = styled.div`
    background-image: url(${HeadingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 375px) {
        height: 35rem;
        align-items: center;
        justify-content: center;
    }
`
S.IntroDiv = styled.div`
    font-family: 'Merriweather', serif;    
    width: 45%;
    height: 20rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    @media only screen and (max-width: 375px) {
        width: 80%;
        justify-content: center;
    }
`

S.IntroText1 = styled.h1`
    width: 100%;
    text-align: left;
    font-size: 5rem;
    @media only screen and (max-width: 375px) {
        font-size: 4rem;
    }
`

S.IntroText2 = styled.p`
    font-size: 2.5rem;
    font-weight: 500;
    @media only screen and (max-width: 375px) {
        font-size: 1.5rem;
    }
`

export default S;

