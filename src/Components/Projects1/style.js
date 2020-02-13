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
    align-items: center;
    background: linear-gradient(rgba(152, 208, 237), white);
`

S.Title = styled.h1`
    font-family: 'Merriweather', serif;
    font-size: 45px;
    color: #426975;
    color: hsl(194, 28%, 45%);
    margin-left: 15%;
`

S.ProjectContainer = styled.div`
    font-family: 'Vollkorn', serif;
    position: relative;
    top: 30px;
    width: 70%;
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
    width: 30%;
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
    width: 65%;
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
    color: hsl(194, 35%, 65%);
    @media only screen and (max-width: 550px) {
        font-size: 25px;
    }
`

S.Languages = styled.p`
    text-align: center;
    color: hsl(194, 5%, 50%);
    margin-bottom: 15px;
    @media only screen and (max-width: 550px) {
        font-size: 15px;
    }
`

S.Description = styled.p`
    font-family: 'Titillium Web', sans-serif;
    font-size: 25px;
    color: hsl(200, 15%, 50%);
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
    position: relative;
    text-decoration: none;
    border-bottom: 2.5px solid white;
    &::before {
        content: "";
        position: absolute;
        right: 0;
        top: 25px;
        width: 0;
        height: 2.5px;
        background-color: black;
        transition: width 0.25s ease;
    }
    &:hover::before, &:active::before, &:focus::before {
        left: 0;
        right: auto;
        width: 100%;
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