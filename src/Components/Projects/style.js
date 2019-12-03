import styled from "styled-components"

const S = {};

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(to top, rgba(99, 235, 201, 0.6), white, white, white, white);
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
    height: 25rem;
    position: relative;
    margin: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
S.ProjectTitle = styled.h3`
    padding: 1rem;
    color: black;
`

S.ProjectImg = styled.img`
    width: 65%;
    height: 45%;
    opacity: 0.8;
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
    margin: 1.5rem;
    text-decoration: none;
    color: black;
    border-bottom: 0.1rem solid transparent;
    transition: 0.25s; 
    &:hover {
        border-color: black;
    }
`

export default S