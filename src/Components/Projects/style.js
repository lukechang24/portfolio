import styled, { keyframes } from "styled-components"

const S = {}

S.Grid = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  display: grid;
  grid-template-columns: 250px 250px;
  grid-row: auto auto;
  gap: 50px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 220px 220px;
    gap: 20px;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 180px 180px;
    gap: 12px;
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: 165px 165px;
    gap: 10px;
  }
`

S.Project = styled.div`
  height: 250px;
  display: flex;
  position: relative;
  background-color: white;
  opacity: 0.9;
  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${props => props.url ? `url(${props.url})` : ""};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
  &:hover {
    & > div:last-child {
      opacity: ${props => props.dark ? "0.8" : "0.7"};
    }
    & > div:first-child {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 220px;
  }
  @media only screen and (max-width: 500px) {
    height: 180px;
  }
  @media only screen and (max-width: 400px) {
    height: 165px;
  }
`

S.ProjectInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: 500;
  padding: 30px 30px 0;
  z-index: 10;
  opacity: 0;
  transition: all 0.25s ease-in-out;
  @media only screen and (max-width: 600px) {
    font-size: 9px;
    padding: 20px 20px 0;
  }
  @media only screen and (max-width: 500px) {
    font-size: 8px;
    padding: 14px 14px 0;
  }
  @media only screen and (max-width: 400px) {
    font-size: 7.5px;
    padding: 12px 12px 0;
  }
`

S.Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  transition: all 0.25s ease-in-out;
`

S.Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  @media only screen and (max-width: 500px) {
    font-size: 10px;
  }
`

S.Languages = styled.h4`
  color: var(--main-blue);
  margin-bottom: 8px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 4px;
  }
`

S.Description = styled.p`
  font-family: 'Quicksand', sans-serif;
  line-height: 0.75rem;
  margin-bottom: 8px;
  @media only screen and (max-width: 500px) {
    line-height: 0.65rem;
  }
  @media only screen and (max-width: 400px) {
    line-height: 0.55rem;
  }
`

S.LinkContainer = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	width: 100%;
  display: flex;
  justify-content: space-between;
	@media only screen and (max-width: 500px) {
    bottom: 0.4rem;
  }
  @media only screen and (max-width: 400px) {
    bottom: 0.25rem;
  }
`

S.Link = styled.a`
  color: var(--main-blue);
  padding-bottom: 1px;
  border-bottom: 1.5px solid var(--main-blue);
  text-decoration: none;
	margin: 0 2rem;
	@media only screen and (max-width: 500px) {
    margin: 0 1.5rem;
  }
  @media only screen and (max-width: 400px) {
    margin: 0 1rem;
  }
`

S.FullScreen = styled.i`
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: white;
  margin: 0 auto;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    bottom: 0.75rem;
  }
  @media only screen and (max-width: 500px) {
    bottom: 0.35rem;
  }
`

S.Arrow = styled.i`
  position: absolute;
  right: ${props => props.left ? "auto" : "-100px"};
  left: ${props => props.left ? "-100px" : "auto"};
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  /* display: flex; */
  display: none;
  align-items: center;
  font-size: 54px;
  color: var(--main-blue);
  padding: 0 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255,255,255,0.1);
    &::before {
      transition: opacity 0.5s ease-in-out;
      opacity: 0.075;
    }
  }
  @media only screen and (max-width: 1250px) {
    display: none;
  }
`

export default S