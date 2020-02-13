import styled from "styled-components"

const S = {};

S.Container1 = styled.div`
    font-family: 'Merriweather', serif;
    width: 100%;
    background: linear-gradient(hsl(200, 42%, 60%), hsl(220, 42%, 50%));
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.Heading = styled.h1`
    font-family: 'Open Sans', sans-serif;
    width: 60%;
    text-align: left;
    color: white;
    margin: 40px 0;
    @media only screen and (max-width: 1040px) {
        width: 80%;
    }
    @media only screen and (max-width: 550px) {
        width: 90%;
        text-align: left;
        margin: 5px 0;
    }
`

S.BrandStatement = styled.p`
    width: 60%;
    font-size: 25px;
    color: hsl(205, 100%, 90%);
    text-align: left;
    line-height: 1.75;
    @media only screen and (max-width: 1040px) {
        width: 80%;
    }
    @media only screen and (max-width: 800px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 550px) {
        width: 90%;
        font-size: 16px;
        line-height: 1.8;
    }
` 

S.Container2 = styled.div`
    width: 75%;
    display: flex;
    justify-content: center;
    margin: 50px 0;
    @media only screen and (max-width: 1040px) {
        width: 90%;
        flex-wrap: wrap;
        margin: 25px 0;
    }
`

S.IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    @media only screen and (max-width: 1040px) {
        margin: 10px 10px;
    }
`

S.Icon = styled.img`
    width: 75px;
    margin: 5px 0;
    @media only screen and (max-width: 550px) {
        width: 50px;
    }
`

S.IconName = styled.span`
    color: hsl(205, 100%, 85%);
    margin-top: 15px;
    @media only screen and (max-width: 1040px) {
        margin-top: 0;
    }
    @media only screen and (max-width: 550px) {
        font-size: 15px;
    }
`

export default S