import styled from "styled-components"
import { NavLink } from "react-router-dom";

const S = {};

S.NavContainer = styled.div`
    font-family: 'Kanit', sans-serif;
    width: 260px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(25,29,43);
`
S.ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1.5px solid #2E344E;
`

S.ProfileDiv = styled.div`
    width: 180px;
    padding: 25px 0;
`

S.ProfileImg = styled.img`
    box-sizing: border-box;
    width: 100%;
    border: 5px solid #2E344E;
    border-radius: 50%;
`

S.ButtonsContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 5px;
    margin: 0 0 85%;
`

S.NavButtons = styled(NavLink)`
    position: relative;
    color: #A4ACC4;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1px;
    padding: 8px 0;
    margin: 5px 0;
    z-index: 1;
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
        transition: width .4s ease-out;
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
    }
`

export default S;