import S from "./style"

import sushi from "../../../Images/sushi.png"
import drawing from "../../../Images/drawing.png"
import usic from "../../../Images/usic.png"
import hackathon from "../../../Images/hackathon.png"

const Modal = (props) => {
  const fullImages = [sushi, drawing, hackathon, usic]
  return(
    <S.Modal className={props.showModal ? "show" : ""}>
      <S.ProjectImg src={fullImages[props.modalIndex]}></S.ProjectImg>
      <S.Overlay>
        <S.Exit className="fa-solid fa-xmark" onClick={() => props.setShowModal(false)}></S.Exit>
      </S.Overlay>
    </S.Modal>
  )
}

export default Modal;