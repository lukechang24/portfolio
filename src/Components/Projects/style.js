import styled, { keyframes } from "styled-components"

const S = {}

S.WorksContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

S.Grid = styled.div`
  position: relative;
  display:grid;
  width: 350px;
  grid-template-rows: 200px 200px;
  /* grid-column: auto auto; */
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`

S.Project = styled.div`
  position: relative;
  background-color: white;
  opacity: 0.75;
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
`

S.Arrow = styled.i`
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  display: flex;
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
      opacity: 0.05;
    }
  }
`

export default S