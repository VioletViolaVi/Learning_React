import React from "react";

let sloganMain = "Life is better with "
let sloganTitle = "spaces".toUpperCase();

function Slogan() {
    return (
        <p>{sloganMain}<span className="span_slogan">{sloganTitle}</span></p>
    )
}

export default Slogan;