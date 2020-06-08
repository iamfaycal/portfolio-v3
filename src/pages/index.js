import React from "react";

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
