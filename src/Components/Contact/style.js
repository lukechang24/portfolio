import styled, { keyframes } from "styled-components"

const S = {}

S.ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.ContactForm = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
`

S.Input = styled.input`
  font-family: 'Quicksand', sans-serif;
  color: var(--main-blue);
  background-color: transparent;
  padding: 8px 16px;
  border: 0.5px solid rgba(154,182,228,0.5);
  margin: 8px 0;
  &::placeholder {
    font-weight: 500;
    color: var(--main-blue);
  }
`

S.Textarea = styled.textarea`
  min-height: 200px;
  font-family: 'Quicksand', sans-serif;
  color: var(--main-blue);
  background-color: transparent;
  padding: 8px 16px;
  border: 0.5px solid rgba(154,182,228,0.5);
  margin: 8px 0;
  resize: none;
  &::placeholder {
    font-weight: 500;
    color: var(--main-blue);
  }
`

S.Submit = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  display: ${props => props.show ? "none" : "block"};
  background-color: var(--main-blue);
  font-size: 20px;
  font-weight: 700;
  padding: 4px 20px;
  margin: 28px auto;
  cursor: pointer;
  &:hover {
    color:white;
  }
`

S.Sent = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  display: ${props => props.show ? "block" : "none"};
  color: white;
  font-size: 20px;
  font-weight: 700;
  padding: 4px 20px;
  margin: 28px auto;
`

S.InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 14px;
`

S.Info = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 600;
`

S.Icon = styled.i`
  color: white;
  font-size: 24px;
  margin: 0 16px;
`

export default S