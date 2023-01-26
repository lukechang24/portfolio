import React from "react"
import S from "./style"

import sushi from "../../../Images/sushi.PNG"
import drawing from "../../../Images/drawing.PNG"
import usic from "../../../Images/usic.PNG"
import hackathon from "../../../Images/hackathon.PNG"

const Modal = (props) => {
  const fullImages = [sushi, drawing, hackathon, usic]
  return(
    <S.Modal className={props.showModal ? "show" : ""}>
      <S.ProjectImg src={fullImages[props.modalIndex]}></S.ProjectImg>
      <S.Overlay modalIndex={props.modalIndex} onClick={() => props.setShowModal(false)}>
        <S.Exit className="fa-solid fa-xmark"></S.Exit>
      </S.Overlay>
    </S.Modal>
  )
}

export default Modal;