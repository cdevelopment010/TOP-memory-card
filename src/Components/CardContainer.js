import React, { useState, useEffect} from "react";
import Card from "./Card";
import '../Styles/cardContainer.css';


/***import images */
// import ash from '../Images/ash.png';
// import bangalore from '../Images/bangalore.png';
// import bloodhood from '../Images/bloodhound.png';
// import caustic from '../Images/caustic.png';
// import crypto from '../Images/crypto.png';



const CardContainer = ({updateCurrentCards, highScore, nextLevel, level}) => {


    const possibleCards = [
        {name: 'Ash',link: 'Images/ash.png'},
        {name: 'Bangalore',link: 'Images/bangalore.png'},
        {name: 'Bloodhound',link: 'Images/bloodhound.png'},
        {name: 'Caustic',link: 'Images/caustic.png'},
        {name: 'Crypto',link: 'Images/crypto.png'},
        {name: 'Fuse',link: 'Images/fuse.png'},
        {name: 'Gibraltar',link: 'Images/gibraltar.png'},
        {name: 'Horizon',link: 'Images/horizon.png'},
        {name: 'Lifeline',link: 'Images/lifeline.png'},
        {name: 'Loba',link: 'Images/loba.png'},
        {name: 'Maggie',link: 'Images/maggie.png'}
    ]

    const [cards, setCards] = useState(possibleCards.slice(0,level));

    const randomCardOrder = () => {
        // console.log("randomCardOrder")
        cards.sort(() => Math.random() > 0.5 ? -1 : 1 ); 
    }

    const gameOver = () => {
        // two options for the modal
        // if next level is available then show btn and you win, else show you crushed it. 

        if (level === possibleCards.length) {
            // you crushed it
            document.querySelector('#gameOver h1').innerText = "You Crushed it! No more levels";
            document.querySelector('#gameOver button').classList.add("d-none");
        } else {
            document.querySelector('#gameOver h1').innerText = "You win";
        }
        
        document.querySelector('#gameOver').classList.add("d-grid");
    }
    
    const newGame = () => {
        nextLevel();
        setCards(possibleCards.slice(0,level+1))
    }

    useEffect(() => {
        // Check for gameover 
        if (highScore === cards.length){
            // alert('GAME OVER!');
            gameOver();
        }
    }, [highScore])




    return (
        <div>
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

            <div className="modal" id="gameOver">
                <div className="modal-body">
                    <h1>You win!</h1>
                    <p>Level remaining: {possibleCards.length - level}</p>
                    <button type="button" onClick={newGame}>Next Level</button>
                </div>
            </div>
        </div>
        
    )
}

export default CardContainer;
