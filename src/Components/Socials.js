import React from "react";
import '../Styles/socials.css';
import TOP from '../TOPfavicon-32x32.png'

const Socials = () => {


    return (
        <div className="ml-auto socials-container">
            <a href="https://www.youtube.com/c/CraigDavisonDev" target="_blank" rel="noreferrer" title="YouTube Channel"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.twitch.tv/cdev010" target="_blank" rel="noreferrer" title="Twitch Channel"><i className="fa-brands fa-twitch"></i></a>
            <a href="https://craig-davison.com/" target="_blank" rel="noreferrer" title="Personal Website"><i className="fa-solid fa-globe"></i></a>
            <a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer"><img src={TOP} title="The Odin Project" alt="The Odin Project logo"/></a>
        </div>
    )
}

export default Socials;