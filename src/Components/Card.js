import React from "react";

const Card = ({card, randomCardOrder, updateCurrentCards}) => {


    const checkCard = () => {
        // console.log("Check Card");
        randomCardOrder();
        updateCurrentCards(card);
    }

    return (
        <div onClick={checkCard}>
            {card}
            <br></br>
        </div>
    )
}

export default Card;