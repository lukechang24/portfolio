import styled from "styled-components"

const A = {}

A.Container1 = styled.div`
    font-family: 'Antic Didone', serif;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #232B3D;
    color: white;
`

A.Container2 = styled.div`
    /* max-width: 1040px;
    width: 90%; */
    width: min(90%, 1040px);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

A.Title = styled.h3`
    color: #B2FFF8;
    font-size: 36px;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    padding: 0 0 8px;
    margin: 36px 0;
`

A.Underline = styled.span`
    font-weight: 700;
    border-bottom: 1px solid #B2FFF8;
`

A.ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default A