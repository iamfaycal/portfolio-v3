import React from "react";

import "./TechnosSmartphone.css";
import "./TechnosDesktop.css";

const Technos = () => {
    return (
        <section id="technos">
            <h2 className="sectionTitle">mes technos</h2>
            <p className="technos__text">
                Je tiens une veille technologique réuglière et me forme
                constamment pour toujours proposer ce qui se fait de mieux en
                développement web. Aujourd'hui je développe avec les outils suivants :
            </p>
            <ul className="technos__list">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Jest</li>
                <li>Gatsby</li>
                <li>Prismic</li>
                <li>GraphQL</li>
                <li>API REST</li>
                <li>Git / Github</li>
            </ul>
        </section>
    );
};

export default Technos;
