import styled, { keyframes } from "styled-components"

const S = {}

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(270deg, rgba(21,31,39,1) 0%, rgba(27,42,51,1) 100%);
`

S.TitleDiv = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1040px) {
        justify-content: center;
    }
`

S.Title = styled.h1`
    font-family: 'Merriweather', serif;
    font-size: 45px;
    color: #D6EFFF;
    margin-left: 15%;
    @media only screen and (max-width: 1040px) {
        margin: 0;
    }
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
        width: 85%;
        flex-direction: column;
        margin-bottom: 50px;
    }
    @media only screen and (max-width: 650px) {
        width: 85%;
    }
`

S.ProjectImg1 = styled.img`
    width: 30%;
    border: 3px solid black;
    opacity: 0.5;
    @media only screen and (max-width: 1040px) {
        display: none;
    }
` 

S.ProjectImg2 = styled.img`
    display: none;
    width: 60%;
    margin-bottom: 25px;
    opacity: 0.5;
    @media only screen and (max-width: 1040px) {
        display: block;
        margin: 25px 0;
    }
`

S.Container3 = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media only screen and (max-width: 1040px) {
        align-items: center;
    }
    @media only screen and (max-width: 400px) {
        width: 100%;
        align-items: center;
    }
`

S.ProjectTitle = styled.h1`
    font-size: 35px;
    margin-bottom: 5px;
    color: hsl(194, 35%, 65%);
    &.small {
            font-size: 30px
    }
    @media only screen and (max-width: 400px) {
        font-size: 25px;
        &.small {
            font-size: 20px
        }
    }
`

S.Languages = styled.p`
    font-size: 20px;
    text-align: center;
    color: hsl(194, 5%, 50%);
    margin-bottom: 5px;
    @media only screen and (max-width: 400px) {
        font-size: 15px;
    }
`

S.Description = styled.p`
    font-family: 'Titillium Web', sans-serif;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: hsl(200, 15%, 50%);
    line-height: 35px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1040px) {
        font-size: 17.5px;
        margin-bottom: 25px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 15px;
        line-height: 20px;
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
    color: hsl(194, 35%, 65%);
    text-decoration: none;
    border-bottom: 2.5px solid transparent;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    &::before {
        content: "";
        position: absolute;
        right: 0;
        top: 25px;
        width: 0;
        height: 2.5px;
        background-color: hsl(194, 35%, 65%);
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
    background-color: hsl(200, 15%, 50%);
    margin-bottom: 50px;
    @media only screen and (max-width: 1040px) {
        display: block;
    }
`

S.BackToTop = styled.div`
    position: fixed;
    right: 0.5%;
    top: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    &.hide {
        display: none;
    }
`

S.Text = styled.small`
    font-size: 18px;
`

S.Icon = styled.i`
    font-size: 18px;
`


export default S