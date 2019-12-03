import styled from "styled-components"
import HeadingImg from "../../images/origami.jpg"

const S = {}

S.Container1 = styled.div`
    background-image: url(${HeadingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    height: calc(100vh + 5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
S.IntroDiv = styled.div`
    font-family: 'Merriweather', serif;    
    width: 45rem;
    height: 20rem;
    margin: 0rem 0rem 15rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
`

S.IntroText1 = styled.h1`
    width: 100%;
    text-align: left;
    font-size: 5rem;
`

S.IntroText2 = styled.p`
    font-size: 2.5rem;
    font-weight: 500;
`

export default S;

