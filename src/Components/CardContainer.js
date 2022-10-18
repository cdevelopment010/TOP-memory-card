import React, { useState, useEffect} from "react";
import Card from "./Card";
const CardContainer = ({updateCurrentCards}) => {

    const [cards, setCards] = useState([1,2,3,4,5]);

    const randomCardOrder = () => {
        // console.log("randomCardOrder")
        setCards(cards.sort(() => Math.random() > 0.5 ? -1 : 1 )); 
    }

    useEffect(() => {
        randomCardOrder();
    }, [cards])

    return (
        <div>
            Card Container

            {cards.map((x,ind) => {
                return <div key ={ind}>
                        <Card 
                            card={x}
                            updateCurrentCards={updateCurrentCards}
                            randomCardOrder={randomCardOrder}/>
                    </div>
            })}

        </div>
    )
}

export default CardContainer;
