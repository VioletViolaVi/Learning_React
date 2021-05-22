import React from "react";
import Slogan from "./Slogan";

let title = "spaces".toUpperCase();

function Title() {
    return (
        <section className="hero_img_text">
            <h1>{title}</h1>
            <Slogan />
        </section>

    )
}

export default Title;