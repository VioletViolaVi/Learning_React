import React from "react";
import Address from "./Address";
import Email from "./Email";
import PhoneNumber from "./PhoneNumber";

function Footer() {
    return (
        <footer className="footer_area">
            <Email />
            <PhoneNumber />
            <Address />
        </footer>
    )
}

export default Footer;