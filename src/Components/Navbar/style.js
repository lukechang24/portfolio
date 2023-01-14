import styled from "styled-components"
import { NavLink } from "react-router-dom";

const S = {};

S.NavContainer = styled.header`
    position: relative;
    /* font-family: 'Sofia Sans Extra Condensed', sans-serif; */
    font-family: 'Roboto Condensed', sans-serif;
    position: fixed;
    width: var(--nav-width);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    color: white;
    padding: 0 4rem;
    z-index: 10;
`

S.LinksContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 0;
`

S.NavLink = styled(NavLink)`
    position: relative;
    color: white;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    padding: 8px 0;
    margin: 10px 0;
    &:hover {
        color: #9ab6e4;
    }
    &.active {
        color: #9ab6e4;
    }
    /* z-index: 1;
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 100%;
        width: 0;
        height: 100%;
        background: rgba(3,127,255,.2);
        content: "";
        visibility: hidden;
        transition: width .4s cubic-bezier(.65,0,.36,1);
        z-index: -1;
    }
    &:hover {
        color: #4084f0;
        &:before {
            width: 100%;
            visibility: visible;
        }
    }
    &.active {
        color: white;
        &:before {
            width: 100%;
            background-color: #0f52ba;
            visibility: visible;
        }
    } */
`

S.TitleContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: 80px 0 48px;
`

S.Name = styled.h1`
    /* font-family: 'Inter', sans-serif; */
    font-family: 'Roboto', sans-serif;
    font-size: 54px;
    margin-bottom: 18px;
`

S.Title = styled.h3`
    font-family: sans-serif;
    font-weight: lighter;
    font-size: 14px;
    letter-spacing: 6px;
    opacity: 0.8;
`

export default S;