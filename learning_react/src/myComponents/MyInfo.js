import React from "react"
import Hobbies from "./hobbies"

const paraStyles = {
    color: "gold",
    fontWeight: "700",
    backgroundColor: "black"
}

function MyInfo() {
    return (
        <div>
            <h1>My name is Vivian</h1>
            <p style={paraStyles}>I'm 27 and I'm learning how to code using React.</p>
            <p style={paraStyles}>My top 3 vacation spots are the following:</p>
            <ul>
                <li style={{ color: 'orange' }}>Singapore</li>
                <li style={{ color: 'orange' }}>Mexico</li>
                <li style={{ color: 'orange' }}>Taiwan</li>
            </ul>
            <Hobbies />
        </div>
    )
}

export default MyInfo