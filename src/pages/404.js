import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./404.css";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <section id="page404">
            <h1>Erreur 404</h1>
            <p>La page que vous recherchez n'existe pas ou a été suprimée</p>
            <a className="underlineLink" href="/">
                Retour à l'accueil
            </a>
        </section>
    </Layout>
);

export default NotFoundPage;
