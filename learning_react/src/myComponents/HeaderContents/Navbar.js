import React from "react";

const divider = " | ";
const stylings = {
    color: "pink",
    backgroundColor: "lightGreen",
    fontWeight: "700"
};
const aboutStyling = {
    color: "yellow",
    backgroundColor: "black"
}
// let about_link = document.getElementsByClassName("about_link")[0].innerHTML;
// if (about_link === "About") {
//     aboutStyling.fontWeight = "900"    
// }

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a style={{ color: "orange", backgroundColor: "yellow" }} href="#home">Home</a>{divider}</li>
                <li><a style={aboutStyling} className="about_link" href="#about">About</a>{divider}</li>
                <li><a style={stylings} href="#contactUs">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;