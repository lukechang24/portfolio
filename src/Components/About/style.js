import styled from "styled-components"

const S = {};

S.Container1 = styled.div`
    font-family: 'Merriweather', serif;
    width: 100%;
    background-color: #6d9bc3;
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.Heading = styled.h1`
    text-align: center;
    color: white;
    margin: 2rem 0;
`

S.BrandStatement = styled.p`
    width: 50%;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    line-height: 1.75;
    @media only screen and (max-width: 1040px) {
        width: 80%;
    }
    @media only screen and (max-width: 800px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        width: 90%;
        font-size: 15px;
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
    }
`

S.IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    @media only screen and (max-width: 1040px) {
        margin: 10px 8px;
    }
`

S.Icon = styled.img`
    width: 75px;
    margin: 5px 0;
`
S.IconName = styled.span`
    color: white;
    margin-top: 15px;
    @media only screen and (max-width: 1040px) {
        margin-top: 0;
    }
`

export default S