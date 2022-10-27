import styled, { keyframes } from "styled-components"

const S = {}

S.Title = styled.h3`
    color: #00B9FF;
    font-size: 32px;
    font-weight: lighter;
`

S.AboutContainer = styled.div`
    display: flex;
    /* justify-content: center; */
`

S.Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

S.Role = styled.h4`
    font-size: 24px;
    margin: 0 0 24px;
`

S.Description = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 0 0 24px;
`

export default S