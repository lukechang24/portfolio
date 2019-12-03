import styled from "styled-components"

const S = {};

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
S.TitleDiv = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(99, 235, 201, 0.6), white);
`
S.Title = styled.h1`
    font-family: 'Merriweather', serif;
    color: #426975;
`

S.Container2 = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem auto;
`

S.ProjectContainer = styled.div`
    font-family: 'Merriweather', serif;
    width: 18rem;
    height: 30rem;
    position: relative;
    margin: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.1rem solid black;
    border-radius: 3rem;
`
S.ProjectTitle = styled.h3`
    padding: 1rem;
    color: #426975;
`

S.ProjectImg = styled.img`
    width: 85%;
    height: 50%;
    border: 0.1rem solid black;
    opacity: 0.25;
`

S.Container3 = styled.div`
    width: 80%;
    text-align: center;
`

S.Languages = styled.h1`
    font-size: 1rem;
    margin: 1rem 0;
    line-height: 2rem;
    font-weight: 400;
`

S.Container4 = styled.div`
    position: absolute;
    bottom: 0;
    width: 80%;
    display: flex;
    justify-content: space-around;
`
S.NavLink = styled.a`
    margin: 1rem;
    background-color: white;
    text-decoration: none;
    border: 0.1rem solid black;
    border-radius: 0.3rem;
    padding: 0.5rem;
    background-color: white;
    color: black;
    transition: 0.25s;
    &:hover {
        background-color: black;
        color: white;
    }
`

export default S