import React from "react";
import HeroImage from "./HeroImage";
import Furniture from "./Furniture";
import Title from "./Title";
import Jokes from "./Jokes";

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
            <Jokes
                furnitureJokes={{
                    question1: "Why do I love my furniture?",
                    answer1: "Because my recliner and I go way back! XD",
                    question2: "What has four legs but can’t walk?",
                    answer2: " A table! X'D",
                    question3: "Why does my computer need curtains?",
                    answer3: "Because I have Windows! HaHa!",
                    question4: "Doctor! Doctor! I feel like a pair of curtains!",
                    answer4: "Then calm down and pull yourself together!",
                    question5: "What's a chair favourite type of tv show?",
                    answer5: "A sit-com!"
                }}
            />
        </section>
    )
}

export default Main;