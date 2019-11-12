import React from "react"

const navStyle = {
    fontFamily: "'Roboto Slab', serif",
    height: "5rem",
    width: "100%",
    position: "fixed",
    top: 0,
    backgroundColor: "#4EB1B7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const container1 = {
    width: "75%",
    padding: "0 2rem",
    fontSize: "2rem",
    textAlign: "left",

}
const container2 = {
    width: "25%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 2rem",
}

const anchorStyle = {
    color: "white",
    textDecoration: "none"
}

function Nav() {
    return(
        <div style={navStyle}>
            <div style={container1}>
                <h2 href="#" style={{"color": "white"}}>Luke Chang</h2>
            </div>
            <div style={container2}>
                <a href="google.com" style={anchorStyle}>About</a>
                <a href="https://www.linkedin.com/in/lukechang420108/" target="_blank" style={anchorStyle}>LinkedIn</a>
                <a href="https://github.com/lukechang24" target="_blank" style={anchorStyle}>GitHub</a>
            </div>
        </div>
    )
}

export default Nav