import React from "react";
import Address from "./Address";
import Email from "./Email";
import PhoneNumber from "./PhoneNumber";

function Footer() {
    return (
        <footer>
            <Email />
            <PhoneNumber />
            <Address />
        </footer>
    )
}

export default Footer;