import styled from "styled-components"
import HeadingImg from "../../images/gradient-pattern.jpg"

const S = {}

S.Container1 = styled.div`
    font-family: 'Didact Gothic', sans-serif;
    display: flex;
    background: linear-gradient(270deg, rgba(21,31,39,1) 0%, rgba(27,42,51,1) 100%);
    justify-content: space-around;
    align-items: center;
    color: #D6EFFF;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

S.IntroDiv = styled.div`
    position: relative;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 100px 50px;
    @media only screen and (max-width: 1040px) {
        width: 90%;
        margin-bottom: 100px;
    }
    @media only screen and (max-width: 600px) {
        margin-bottom: 50px;
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

S.Picture = styled.img`
    width: 300px;
    margin-right: 50px;
    @media only screen and (max-width: 1040px) {
        width: 200px;
    }
    @media only screen and (max-width: 600px) {
        width: 150px;
        margin-right: 0;
        margin-bottom: 50px;
    }
`

S.Decoration = styled.hr`
    position: absolute;
    top: 0;
    width: 100%;
    color: white;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export default S;

