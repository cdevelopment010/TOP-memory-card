import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";

const Game = () => {

    const [score, setScore] = useState(0); 
    const [highScore, setHighScore] = useState(0); 
    const [currentCards, setCurrentCards] = useState([]);

    const updateCurrentCards = (card) => {
        // console.log("updateCurrentCards");
        if(currentCards.indexOf(card) === -1){
            setCurrentCards([...currentCards, card])
        } else {
            setCurrentCards([]); 
            setScore(0);
        }
    }

    useEffect(() => { 
        //reset
        if (currentCards.length === 0) {
            setScore(0);
        }         
        //update score
        else {
            setScore(score + 1);
        }

    }, [currentCards])

    // on score change check high score
    useEffect(() => {
        if(score >= highScore) {
            setHighScore(score);
        }
    }, [score])

    return (
        <div>
            Game Components
            <br></br>
            score: {score}
            <br></br>
            high score: {highScore}
            <CardContainer 
                updateCurrentCards={updateCurrentCards}
                />
        </div>
    )
}

export default Game;