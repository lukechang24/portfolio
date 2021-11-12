import styled from "styled-components"

const S = {};

S.NavBar = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    font-family: 'Quicksand', sans-serif;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
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
    margin-top: 10px;
    cursor: pointer;
    @media only screen and (max-width: 550px) {
        display: none;
    }
`

S.NavLink = styled.a`
    font-size: 18px;
    color: white;
    margin: 1rem;
    border-bottom: 0.1rem solid transparent;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        border-color: white;
    }
`

export default S