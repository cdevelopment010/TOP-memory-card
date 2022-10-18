import React, { useState, useEffect} from "react";
import Card from "./Card";
import '../Styles/cardContainer.css';


/***import images */
import ash from '../Images/ash.png';
import bangalore from '../Images/bangalore.png';
import bloodhood from '../Images/bloodhound.png';
import caustic from '../Images/caustic.png';
import crypto from '../Images/crypto.png';



const CardContainer = ({updateCurrentCards}) => {


    // const possibleCards = [
    //     {
    //         name: 'Ash',
    //         link: ash
    //     }
    // ]

    const [cards, setCards] = useState([
        {
            name: 'Ash',
            link: ash
        },
        {
            name: 'Bangalore',
            link: bangalore
        },
        {
            name: 'Bloodhood',
            link: bloodhood
        },
        {
            name: 'Caustic',
            link: caustic
        },
        {
            name: 'Crypto',
            link: crypto
        }

    ]);

    const randomCardOrder = () => {
        // console.log("randomCardOrder")
        setCards(cards.sort(() => Math.random() > 0.5 ? -1 : 1 )); 
    }

    useEffect(() => {
        randomCardOrder();
    }, [cards])

    return (
        <div className="card-container">
            {cards.map((x,ind) => {
                return <div key ={ind}>
                        <Card 
                            cardText={x.name}
                            cardImg={x.link}
                            updateCurrentCards={updateCurrentCards}
                            randomCardOrder={randomCardOrder}/>
                    </div>
            })}

        </div>
    )
}

export default CardContainer;