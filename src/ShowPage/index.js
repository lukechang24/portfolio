import React from "react"
import profPic from "../prof-pic.png"



function ShowPage() {
    return(
        <div style={{"margin-top": "5rem", "min-height": "100vh"}}>
            <img style={{"height": "20rem", "border-radius": "100px"}} src={profPic}></img>
        </div>
    )
}

export default ShowPage