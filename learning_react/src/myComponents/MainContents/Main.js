import React from "react";
import HeroImage from "./HeroImage";
import Furniture from "./Furniture";
import Title from "./Title";

function Main() {
    return (
        <section className="main_container">
            <Title />
            <HeroImage />
            <Furniture
                order={{
                    sofas: "£4650.99",
                    tables: "£8009.99",
                    chairs: "£289.99",
                    beds: "£354.99"
                }}
            />
        </section>
    )
}

export default Main;