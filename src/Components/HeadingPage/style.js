import styled from "styled-components"
import HeadingImg from "../../images/origami.jpg"

const S = {}

S.Container1 = styled.div`
    background-image: url(${HeadingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    height: 40rem;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 375px) {
        background-color: red;
        height: 30rem;
    }
`

export default S;

