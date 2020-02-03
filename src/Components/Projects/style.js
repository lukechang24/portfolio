import styled from "styled-components"

const S = {};

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

S.TitleDiv = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(152, 208, 237), white);
    /* @media only screen and (max-width: 375px) {
        height: 5rem;
    } */
`
S.Title = styled.h1`
    font-family: 'Merriweather', serif;
    color: #426975;
`

S.Container2 = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem auto;
`

S.ProjectContainer = styled.div`
    font-family: 'Abel', sans-serif;
    width: 18rem;
    height: 30rem;
    position: relative;
    margin: 1rem 1.5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 375px) {
        margin: 0 auto;
    }
`
S.ProjectTitle = styled.h2`
    padding: 1rem;
    color: black;
`

S.ProjectImg = styled.img`
    width: 10rem;
    height: 10rem;
    opacity: 0.8;
`

S.Container3 = styled.div`
    height: 5rem;
    width: 80%;
    text-align: center;
`

S.Languages = styled.h1`
    font-size: 1rem;
    margin: 1rem 0;
    line-height: 2rem;
    font-weight: 400;
`

S.Description = styled.p`
    text-align: center;
`

S.Container4 = styled.div`
    position: absolute;
    bottom: 0;
    width: 80%;
    display: flex;
    justify-content: space-around;
`
S.NavLink = styled.a`
    margin: 1.5rem;
    text-decoration: none;
    color: black;
    font-weight: bolder;
    border-bottom: 0.1rem solid transparent;
    transition: 0.25s; 
    &:hover {
        border-color: black;
    }
`
S.LineBreak = styled.div`
    border-right: 1px solid black;
    height: 30rem;
    background-color: black;
    margin: auto 0;
    @media only screen and (max-width: 500px) {
        width: 20rem;
        height: 1px;
    }
`

export default S