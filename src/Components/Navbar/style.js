import styled from "styled-components"
import { NavLink } from "react-router-dom";

const S = {};

S.NavContainer = styled.header`
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
  @media only screen and (max-width: 1250px) {
    padding: 0 2rem;
  }
  @media only screen and (max-width: 900px) {
    padding: 0 1rem;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    display: none;
  }
`

S.MiniNavContainer = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  height: ${props => props.isHome ? "100vh" : "auto"};
  display: none;
  flex-direction: column;
  align-items: ${props => props.isHome ? "normal" : "center"};
  justify-content: center;
  background-color: black;
  color: white;
  padding: 0 2.5rem;
  z-index: 10;
  @media only screen and (max-width: 800px) {
    display: flex;
    margin-bottom: 32px;
  }
`

S.LinksContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
  gap: 36px;
  @media only screen and (max-width: 800px) {
    flex-direction: ${props => props.isHome ? "column" : "row"};
  }
`

S.NavLink = styled(NavLink)`
  position: relative;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: var(--main-blue);
  }
  &.active {
    color: var(--main-blue);
  }
`

S.TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 80px 0 48px;
  @media only screen and (max-width: 800px) {
    position: ${props => props.isHome ? "absolute" : "static"};
    text-align: ${props => props.isHome ? "left" : "center"};
    margin: ${props => props.isHome ? "70px 0 80px" : "32px 0 32px"};
  }
`

S.Name = styled.h1`
  /* font-family: 'Inter', sans-serif; */
  font-family: 'Roboto', sans-serif;
  font-size: 54px;
  font-weight: 900;
  margin-bottom: 18px;
  @media only screen and (max-width: 1250px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 40px;
    margin-bottom: 8px;
  }
`

S.Title = styled.h3`
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 14px;
  letter-spacing: 6px;
  opacity: 0.8;
  @media only screen and (max-width: 1250px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 900px) {
    letter-spacing: 4px;
  }
  @media only screen and (max-width: 800px) {
    letter-spacing: 5px;
  }
`

export default S;