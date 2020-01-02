import styled from "styled-components"

const S = {};

S.NavBar = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    font-family: 'Quicksand', sans-serif;
    height: 5rem;
    background-color: inherit;
    display: flex;
    align-items: center;
    color: white;
    margin-bottom: 8rem;
    @media only screen and (max-width: 375px) {
        margin-bottom: 1rem;
    }
`
S.NameDiv = styled.div`
    width: 50%;
    @media only screen and (max-width: 375px) {
        width: 100%;
    }
`
S.Name = styled.h1`
    padding-left: 3rem;
`

S.NavLinkDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 375px) {
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