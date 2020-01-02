import styled from "styled-components"

const S = {};

S.Container1 = styled.div`
    font-family: 'Merriweather', serif;
    width: 100%;
    height: 30rem;
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
    @media only screen and (max-width: 500px) {
        width: 90%;
        font-size: 1rem;
        line-height: 1.5;
    }
` 

export default S