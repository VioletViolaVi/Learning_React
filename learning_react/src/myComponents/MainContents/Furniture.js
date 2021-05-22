import React from "react";

const Furniture = (props) => {
    return (
        <section>
            <br />
            <h2>Our Furniture</h2>
            <br />
            <ul style={{marginLeft: "1rem"}}>
                <li style={{textAlign: "left"}}>Sofas: {props.order.sofas}</li>
                <li style={{textAlign: "left"}}>Tables: {props.order.tables}</li>
                <li style={{textAlign: "left"}}>Chairs: {props.order.chairs}</li>
                <li style={{textAlign: "left"}}>Beds: {props.order.beds}</li>
            </ul>
        </section>
    )
}

export default Furniture;