import React from "react";
import '../Styles/navbar.css';
import Socials from "./Socials";

const NavBar = ({score, highScore}) => {

    const modalToggle = () => {
        let modal = document.querySelector('.modal'); 
        modal.classList.toggle("d-grid");
    }

    return(
        <div>
            <div className="nav">
                <div className="logo" onClick={modalToggle}></div>
                <div className="tab tab-info" onClick={modalToggle}>
                    <span className="tab-text">Info</span>
                    <span className="tab-bar"></span>
                </div>
                <div className="tab">
                    <span className="tab-text">Score</span>
                    <span className="tab-bar">
                        <span className="tab-bar-text">{score}</span>
                    </span>
                </div>
                <div className="tab">
                    <span className="tab-text">High Score</span>
                    <span className="tab-bar">
                        <span className="tab-bar-text">{highScore}</span>
                    </span>
                </div>

                <Socials />
            </div>
            <div className="modal" onClick={modalToggle}>
                <div className="modal-body">
                    <h2>Rules & Info</h2>
                    <hr/>
                    <p>The aim of the game is to select all the cards in a row without selecting the same card twice.</p>
                    <br></br>
                    <br></br>
                    <p><em>This project is from The Odin Project (TOP). A free resource for learning web development - check it out at the link in the top right.</em></p>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar