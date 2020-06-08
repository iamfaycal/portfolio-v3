import React from "react";

import "./HomeSmartphone.css";
import "./HomeDesktop.css";

import Faycal from "../../assets/faycal.svg";

const Home = () => {
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
