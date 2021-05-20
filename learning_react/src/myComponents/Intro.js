import React from "react"

const paraStyles = {
    color: "pink",
    fontWeight: "900",
    backgroundColor: "red"
}

function Intro() {
    return (
        <div>
            <h1>This is a heading.</h1>
            <p style={paraStyles}>This is a paragraph.</p>
        </div>
    )
}

export default Intro