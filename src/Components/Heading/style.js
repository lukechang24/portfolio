import styled from "styled-components"
import HeadingImg from "../../images/origami.jpg"

const S = {}

S.Container1 = styled.div`
    background-image: url(${HeadingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    display: flex;
    @media only screen and (max-width: 375px) {
        align-items: center;
    }
`
S.IntroDiv = styled.div`
    font-family: 'Merriweather', serif;    
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin: 100px 50px 300px;
    @media only screen and (max-width: 1040px) {
        width: 80%;
        margin-bottom: 100px;
    }
    @media only screen and (max-width: 550px) {
        margin-left: 25px;
    }
`

S.IntroText1 = styled.h1`
    width: 100%;
    text-align: left;
    font-size: 75px;
    margin-bottom: 20px;
    @media only screen and (max-width: 1040px) {
        font-size: 50px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 40px;
    }
`

S.IntroText2 = styled.p`
    font-size: 2.5rem;
    font-weight: 500;
    @media only screen and (max-width: 1040px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 20px;
    }
`

S.Small = styled.span`
    font-size: 30px;
    @media only screen and (max-width: 700px) {
        font-size: 20px;
    }
`

export default S;

