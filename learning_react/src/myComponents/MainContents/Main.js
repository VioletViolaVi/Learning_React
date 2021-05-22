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
                    answer5: "A sit-com!",
                    punchLine1: "Heard about someone addicted to eating sofas. He’s got a suite tooth.",
                    punchLine2: "Someone stole the duvet from off my bed. Thankfully it was recovered.",
                    punchLine3: "When I heard my sofa had been stolen, I thought “I’m not going to take this sitting down”.",
                    punchLine4: "Thought I won an argument with my wife about how to rearrange our furniture..... But when I got home, the tables were turned",
                    punchLine5: "I quit my job at the furniture shop. It just didn't sit right with me."
                }}
            />
        </section>
    )
}

export default Main;