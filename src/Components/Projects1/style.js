import styled, { keyframes } from "styled-components"

const S = {}

const slideInFromLeft = keyframes`
    0% {
      transform: translateX(-30%);
    }
    100% {
      transform: translateX(0);
    }
`

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.ProjectContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: ${props => props.left ? "row-reverse" : "row"};
    justify-content: space-between;
    margin: 50px 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
`

S.ProjectImg = styled.img`
    width: 35%;
` 

S.Container3 = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

S.ProjectTitle = styled.h1`
    font-size: 35px;
    margin-bottom: 5px;
`

S.Languages = styled.p`
    margin-bottom: 15px;
`

S.Description = styled.p`
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 50px;
`


S.Container4 = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
`

S.NavLink = styled.a`

`

export default S