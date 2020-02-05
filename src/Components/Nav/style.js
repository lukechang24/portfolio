import styled from "styled-components"

const S = {};

S.NavBar = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    font-family: 'Quicksand', sans-serif;
    background-color: inherit;
    display: flex;
    align-items: center;
    color: white;
`
S.LogoDiv = styled.div`
    width: 50%;
    margin: 10px 0;
    @media only screen and (max-width: 550px) {
        width: 100%;
    }
`
S.Logo = styled.img`
    width: 50px;
    padding-left: 50px;
    @media only screen and (max-width: 550px) {
        padding-left: 25px;
    }
`

S.NavLinkDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 550px) {
        display: none;
    }
`

S.NavLink = styled.a`
    margin: 1rem;
    border-bottom: 0.1rem solid transparent;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        border-color: white;
    }
`

export default S