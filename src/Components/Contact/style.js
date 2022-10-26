import styled, { keyframes } from "styled-components"

const S = {}

const slideInFromLeft = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`

S.ContactContainer = styled.div`
    font-family: 'Libre Franklin', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #273045;
    animation: 0.5s ease-out 0s 1 ${slideInFromLeft};
`

export default S