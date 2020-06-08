import React from "react";
import { Helmet } from "react-helmet";

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
    return (
        <Layout>
            <SEO />
            <Helmet>
                <script>{`                    
                    const transValues = {
                        x: 0,
                        y: 0,
                    };

                    let vw = Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                    );
                    let vh = Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                    );

                    const handleMouseMove = e => {
                        let transValues.x = (e.nativeEvent.clientX - vw / 2) / 10;
                        let transValues.x = (e.nativeEvent.clientY - vh / 2) / 10;
                        //console.log("onMouseMove", transX, transY);
                    };

                    document.querySelector(".home__hugeText").style.transform =
                        "translate(calc(-50% + " +
                        transValues.x +
                        "px), calc(-50% + " +
                        transValues.y +
                        "px))";
                `}</script>
            </Helmet>
            <div className="components">
                <Home />
                <About />
                <Technos />
                <Work Client={Client} />
                <Contact />
            </div>
        </Layout>
    );
};

export default IndexPage;
