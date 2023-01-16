import { NavLink } from "react-router-dom"
import styled, { keyframes } from "styled-components"

const S = {}

S.AboutContainer = styled.div`
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    width: 450px;
    margin: 0 auto;
`

S.About = styled.p`
    font-family: 'Quicksand', sans-serif;
    color: white;
    font-size: 12px;
    font-weight: 400;
    text-align: justify;
    line-height: 0.85rem;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
`

S.ProfilePic = styled.img`
    width: 75px;
    height: 75px;
`

S.Location = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3rem;
`

S.ResumeContainer = styled.a`
    display: flex;
    align-items: flex-end;
`

S.Resume = styled.div`
    color: white;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-decoration: none;
`

S.Icon = styled.img`
    width: 16px;
    margin-left: 6px;
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