import styled from "styled-components"

const S = {};

S.AppContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  background-color: black;
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    /* overflow: visible; */
    flex-direction: column;
  }
`

S.ContentContainer = styled.div`
  position: relative;
  flex-grow: 1;
  margin-left: var(--nav-width);
  @media only screen and (max-width: 800px) {
    margin-left: 0;
    flex-grow: 0;
  }
`

export default S;