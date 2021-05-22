import React from "react";

const Jokes = (props) => {
    return (
        <section>
            <br />
            <h2>Furniture Jokes because... well, why not!</h2>
            <br />
            <ol>
                <li className="joke_question">{props.furnitureJokes.question1}</li>
                <li className="joke_answer">{props.furnitureJokes.answer1}</li>
                <br />
                <li className="joke_question">{props.furnitureJokes.question2}</li>
                <li className="joke_answer">{props.furnitureJokes.answer2}</li>
                <br />
                <li className="joke_question">{props.furnitureJokes.question3}</li>
                <li className="joke_answer">{props.furnitureJokes.answer3}</li>
                <br />
                <li className="joke_question">{props.furnitureJokes.question4}</li>
                <li className="joke_answer">{props.furnitureJokes.answer4}</li>
                <br />
                <li className="joke_question">{props.furnitureJokes.question5}</li>
                <li className="joke_answer">{props.furnitureJokes.answer5}</li>
                <br />
            </ol>
            <h2>Furniture punchlines next. Warning, these are awful! ;D</h2>
            <br />
            <ol>
                <li className="punchline">{props.furnitureJokes.punchLine1}</li>
                <br />
                <li className="punchline">{props.furnitureJokes.punchLine2}</li>
                <br />
                <li className="punchline">{props.furnitureJokes.punchLine3}</li>
                <br />
                <li className="punchline">{props.furnitureJokes.punchLine4}</li>
                <br />
                <li className="punchline">{props.furnitureJokes.punchLine5}</li>
            </ol>
        </section>
    )
}

export default Jokes;