import styled from "styled-components"

const A = {}

A.Container1 = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
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

A.Bold = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700 !important;
`

A.Dull = styled.span`
    opacity: 0.8;
`

A.Blue = styled.span`
    color: #9ab6e4;
`

A.Underline = styled.span`
    font-weight: 700;
    border-bottom: 1px solid var(--main-blue);
`

A.RowDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

A.ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default A