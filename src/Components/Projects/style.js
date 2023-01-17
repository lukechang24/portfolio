import styled, { keyframes } from "styled-components"

const S = {}

S.Grid = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  display: grid;
  grid-template-columns: 250px 250px;
  grid-row: auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`

S.Project = styled.div`
  height: 250px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
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
    & > div {
      visibility: visible;
    }
  }
`

S.ProjectInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  visibility: hidden;
  font-size: 10px;
  font-weight: 500;
  padding: 0 30px;
  z-index: 10;
`

S.Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  visibility: hidden;
`

S.Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
`

S.Languages = styled.h4`
  color: var(--main-blue);
  margin-bottom: 8px;
`

S.Description = styled.p`
  font-family: 'Quicksand', sans-serif;
  /* text-align: justify; */
  line-height: 0.75rem;
  margin-bottom: 8px;
`

S.LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

S.Link = styled.a`
  color: var(--main-blue);
  text-decoration: none;
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