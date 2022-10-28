import styled, { keyframes } from "styled-components"

const S = {}

S.Title = styled.h3`
    color: #00B9FF;
    font-size: 32px;
`

S.AboutContainer = styled.div`
    display: flex;
    margin-right: -16px;
    margin-left: -16px;
`

S.Container1 = styled.div`
    display: flex;
    flex: ${props => props.bigger ? "0 0 66.667%" : "auto"};
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
`

S.SubHeading = styled.h4`
    font-size: 24px;
    margin: 0 0 24px;
`

S.Description = styled.p`
    color: #E1E1E1;
    line-height: 1.5;
    margin: 0 0 24px;
`

S.Information = styled.p`
    color: #E1E1E1;
    font-weight: 400;
    margin-bottom: 16px;
`

S.LanguageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`



export default S