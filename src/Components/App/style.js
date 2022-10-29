import styled from "styled-components"

const S = {};

S.AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    background-color: black;
`

S.ContentContainer = styled.div`
    position: relative;
    flex-grow: 1;
    margin-left: var(--nav-width);
`

export default S;