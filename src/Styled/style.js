import styled from "styled-components"

const A = {}

A.Container1 = styled.div`
    font-family: 'Antic Didone', serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #232B3D;
    color: white;
`

A.Container2 = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    letter-spacing: 1px;
`

A.Title = styled.h3`
    color: #B2FFF8;
    font-size: 36px;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    padding: 8px 0;
    margin: 32px 0;
`

export default A