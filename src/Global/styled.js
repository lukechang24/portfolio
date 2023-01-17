import styled from "styled-components"

const A = {}

A.Container1 = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`

A.Container2 = styled.div`
    /* max-width: 1040px;
    width: 90%; */
    width: min(90%, 1040px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

A.Title = styled.h1`
    /* font-family: 'Jost', sans-serif; */
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    font-weight: 900;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 24px;
`

A.Bold = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700 !important;
`

A.Dull = styled.span`
    opacity: 0.8;
`

A.Blue = styled.span`
    color: var(--main-blue);
`

A.Underline = styled.span`
    font-weight: 700;
    border-bottom: 1px solid var(--main-blue);
`

A.RowDiv = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "normal"};
    align-items: ${props => props.alignItems ? props.alignItems : "normal"};
`

A.ColumnDiv = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "normal"};
    align-items: ${props => props.alignItems ? props.alignItems : "normal"};
`

export default A