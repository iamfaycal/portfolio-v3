import React from "react";

import "./AboutSmartphone.css";
import "./AboutDesktop.css";

const About = () => {
    return (
        <section id="about">
            <h2 className="sectionTitle">à propos</h2>
            <p className="about__text">
                Je suis Fayçal, développeur web frontend. Je suis passioné par
                l'informatique et le code depuis plus de 10 ans. Je créé des
                applications frontend et serveless ultra-rapides avec React.js.
                J'apporte un maximum de valeur ajoutée sur vos projets en
                accordant une attention particulière à la qualité du code que j'écrit
                et en suivant les bonnes pratiques du métier.
            </p>
        </section>
    );
};

export default About;
