import styled, { keyframes } from "styled-components"

const S = {}

S.AboutContainer = styled.div`
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    width: 450px;
    margin: 0 auto;
`

S.Title = styled.h1`
    /* font-family: 'Jost', sans-serif; */
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 24px;
`

S.About = styled.p`
    font-family: 'Quicksand', sans-serif;
    color: white;
    font-size: 12px;
    font-weight: lighter;
    line-height: 0.85rem;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    /* -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto; */
`

S.ProfilePic = styled.img`
    width: 75px;
    height: 75px;
`

S.Location = styled.div`
    /* font-family: 'Jost', sans-serif; */
    font-size: 12px;
    font-weight: lighter;
    line-height: 1.3rem;
`

S.SocialContainer = styled.div`
    margin: 0 auto;
`

S.Link = styled.a`
    text-decoration: none;
    color: white;
`

S.SocialMedia = styled.i`
    font-size: 24px;
    margin: 32px 6px 0;
`

export default S