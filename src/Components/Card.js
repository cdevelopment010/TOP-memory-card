import React from "react";
import '../Styles/card.css';
const Card = ({cardText,cardImg, updateCurrentCards}) => {



    const checkCard = () => {
        // console.log("Check Card");
        // randomCardOrder();
        updateCurrentCards(cardText);
    }

    return (
        <div onClick={checkCard} className="card">

            <img src={cardImg}/>
            {cardText}
            <br></br>
        </div>
    )
}

export default Card;