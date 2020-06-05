import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Technos from "../components/Technos/Technos";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";

import Prismic from "prismic-javascript";

const apiEndpoint = process.env.GATSBY_API_URL;
const accessToken = process.env.GATSBY_ACCESS_TOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken });

const IndexPage = () => {
    const [transValues, setTransValues] = useState({
        x: 0,
        y: 0,
    });

    let vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    let vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );

    const handleMouseMove = e => {
        let transX = (e.nativeEvent.clientX - vw / 2) / 10;
        let transY = (e.nativeEvent.clientY - vh / 2) / 10;
        //console.log("onMouseMove", transX, transY);
        setTransValues({
            x: transX,
            y: transY,
        });
    };

    return (
        <Layout onMouseMove={e => handleMouseMove(e)}>
            <SEO />
            <div className="components">
                <Home transValues={transValues} />
                <About />
                <Technos />
                <Work Client={Client} />
                <Contact />
            </div>
        </Layout>
    );
};

export default IndexPage;
