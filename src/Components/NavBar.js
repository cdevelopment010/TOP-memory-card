import React from "react";
import '../Styles/navbar.css';

const NavBar = ({score, highScore}) => {

    return(
        <div className="nav">
            <div className="logo"></div>
            <div className="tab">
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
        </div>
    )
}

export default NavBar