import styled from "styled-components"

const S = {};

S.NavBar = styled.div`
    font-family: 'Quicksand', sans-serif;
    height: 5rem;
    background-color: inherit;
    display: flex;
    align-items: center;
    color: white;
`
S.NameDiv = styled.div`
    width: 80%;
`
S.Name = styled.h1`
    padding-left: 3rem;
`

S.NavLinkDiv = styled.div`
    width: 20%;
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