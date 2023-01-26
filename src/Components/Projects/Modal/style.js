import styled from "styled-components"

const S = {};

S.Modal = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 10;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  &.show {
    opacity: 1;
    visibility: visible;
  }
`

S.Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.75;
`

S.ProjectImg = styled.img`
  width: 80%;
  z-index: 1;
`

S.Exit = styled.i`
  position: absolute;
  right: 28px;
  top: 28px;
  color: white;
  cursor: pointer;
`

export default S;