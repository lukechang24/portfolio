import React from "react"
import { Route, Routes } from "react-router-dom"

import S from "./style"

const Home = () => {
  return (
    <S.HomeContainer>
        <S.Title>LUKE CHANG</S.Title>
        <S.Container1>
            <S.Description><S.Dull>I am a</S.Dull> Frontend Developer</S.Description>
        </S.Container1>

    </S.HomeContainer>
  );
}

export default Home;