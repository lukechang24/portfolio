import React from "react"
import profPic from "../prof-pic.jpg"



function ShowPage() {
    return(
        <div>
            <img style={{"height": "20rem", "border-radius": "100px"}} src={profPic}></img>
        </div>
    )
}

export default ShowPage