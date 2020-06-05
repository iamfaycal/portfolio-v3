import React, { useEffect } from "react";

import "./HomeSmartphone.css";
import "./HomeDesktop.css";

import Faycal from "../../assets/faycal.svg";

const Home = ({ transValues }) => {
    //console.log(transValues);
    useEffect(() => {
        //console.log(document.querySelector(".home__hugeText"));
        document.querySelector(".home__hugeText").style.transform =
            "translate(calc(-50% + " +
            transValues.x +
            "px), calc(-50% + " +
            transValues.y +
            "px))";
    }, [transValues.x, transValues.y]);

    return (
        <section id="home">
            <h2 className="home__title">
                développeur
                <br />
                React.js freelance
            </h2>
            <div className="home__links">
                <a className="underlineLink" href="#technos">
                    voir mes technos
                </a>
                <a className="underlineLink" href="#work">
                    voir mes dernières réalisations
                </a>
            </div>
            <img className="home__hugeText" src={Faycal} alt="" />
        </section>
    );
};

export default Home;
