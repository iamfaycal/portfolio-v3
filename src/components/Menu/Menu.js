import React from "react";
import { Link } from "gatsby";

import "./MenuSmartphone.css";
import "./MenuDesktop.css";

const Menu = ({ setMenuVisible }) => {
    const navItemClicked = e => {
        document.querySelector("#menu").classList.remove("menu--enterring");
        document.querySelector("#menu").classList.add("menu--leaving");
        document
            .querySelector(".menuButton")
            .classList.remove("menuButton--close");
        setTimeout(() => setMenuVisible(false), 200);
    };

    return (
        <div id="menu" className="menu--enterring">
            <nav className="mainNavigation">
                <Link
                    className="mainNavigation__item"
                    to="/#home"
                    onClick={e => navItemClicked(e)}
                >
                    accueil
                </Link>
                <Link
                    className="mainNavigation__item"
                    to="/#about"
                    onClick={e => navItemClicked(e)}
                >
                    à propos
                </Link>
                <Link
                    className="mainNavigation__item"
                    to="/#work"
                    onClick={e => navItemClicked(e)}
                >
                    réalisations
                </Link>
                <Link
                    className="mainNavigation__item"
                    to="/#contact"
                    onClick={e => navItemClicked(e)}
                >
                    contact
                </Link>
                <a
                    className="mainNavigation__item"
                    href="https://42-tech.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => navItemClicked(e)}
                >
                    blog
                </a>
            </nav>
            <nav className="legalNavigation">
                <Link
                    className="legalNavigation__item legal"
                    to="/mentions-legales"
                    onClick={e => navItemClicked(e)}
                >
                    mentions légales
                </Link>
            </nav>
        </div>
    );
};

export default Menu;
