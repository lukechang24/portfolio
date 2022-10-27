import styled from "styled-components"

const A = {}

A.Container = styled.div`
    font-family: 'Libre Franklin', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #232B3D;
`

A.Title = styled.h3`
    width: 100%;
    max-width: 1000px;
    color: white;
    font-size: 32px;
    font-weight: lighter;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    padding: 8px 0;
    margin: 32px 0;
`

export default A