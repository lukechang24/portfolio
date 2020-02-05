import styled, { keyframes } from "styled-components"

const S = {}

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.TitleDiv = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(152, 208, 237), white);
`

S.Title = styled.h1`
    font-family: 'Merriweather', serif;
    font-size: 45px;
    color: #426975;
`

S.ProjectContainer = styled.div`
    font-family: 'Vollkorn', serif;
    position: relative;
    top: 30px;
    width: 80%;
    display: flex;
    flex-direction: ${props => props.left ? "row-reverse" : "row"};
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    @media only screen and (max-width: 1040px) {
        flex-direction: column;
        margin-bottom: 50px;
    }
`

S.ProjectImg1 = styled.img`
    width: 35%;
    border: 3px solid black;
    @media only screen and (max-width: 1040px) {
        display: none;
    }
` 

S.ProjectImg2 = styled.img`
    display: none;
    width: 60%;
    margin-bottom: 25px;
    @media only screen and (max-width: 1040px) {
        display: block;
    }
`

S.Container3 = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 550px) {
        width: 100%;
    }
`

S.ProjectTitle = styled.h1`
    font-size: 35px;
    margin-bottom: 5px;
    @media only screen and (max-width: 550px) {
        font-size: 25px;
    }
`

S.Languages = styled.p`
    text-align: center;
    margin-bottom: 15px;
    @media only screen and (max-width: 550px) {
        font-size: 15px;
    }
`

S.Description = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1040px) {
        font-size: 20px;
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 550px) {
        font-size: 18px;
    }
`


S.Container4 = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 1040px) {
        width: 75%;
    }
`

S.NavLink = styled.a`
    text-decoration: none;
    border-bottom: 2.5px solid white;
    transition: border 0.25s ease-in-out;
    &:hover {
        border-bottom: 2.5px solid #000;
    }
`

S.LineBreak = styled.hr`
    display: none;
    width: 70%;
    height: 0.25px;
    background-color: grey;
    margin-bottom: 50px;
    @media only screen and (max-width: 1040px) {
        display: block;
    }
`

export default S