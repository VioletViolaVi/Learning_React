import React from "react";

const Jokes = (props) => {
    return (
        <section>
            <br />
            <h2>Furniture Jokes because... well, why not!</h2>
            <br />
            <ol>
                <li>{props.furnitureJokes.question1}</li>
                <li>{props.furnitureJokes.answer1}</li>
            </ol>
            <ol>
                <li>{props.furnitureJokes.question2}</li>
                <li>{props.furnitureJokes.answer2}</li>
            </ol>
            <ol>
                <li>{props.furnitureJokes.question3}</li>
                <li>{props.furnitureJokes.answer3}</li>
            </ol>
            <ol>
                <li>{props.furnitureJokes.question4}</li>
                <li>{props.furnitureJokes.answer4}</li>
            </ol>
            <ol>
                <li>{props.furnitureJokes.question5}</li>
                <li>{props.furnitureJokes.answer5}</li>
            </ol>
        </section>
    )
}

export default Jokes;