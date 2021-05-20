import React from "react"

const paraStyles = {
    color: "pink",
    fontWeight: "900",
    backgroundColor: "red"
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
        </div>
    )
}

export default MyInfo
