import React from "react";

import "./HeaderSmartphone.css";
import "./HeaderDesktop.css";

import { Link } from "gatsby";

const Header = ({ setMenuVisible, menuVisible }) => {
    const onClick = () => {
        if (!menuVisible) {
            setMenuVisible(!menuVisible);
            document
                .querySelector(".menuButton")
                .classList.add("menuButton--close");
        } else {
            setTimeout(() => setMenuVisible(!menuVisible), 200);
            document.querySelector("#menu").classList.remove("menu--enterring");
            document.querySelector("#menu").classList.add("menu--leaving");
            document
                .querySelector(".menuButton")
                .classList.remove("menuButton--close");
        }
    };

    return (
        <header>
            <div id="brand">
                <Link to="/#home">
                    <h1 className="brand__text">FH</h1>
                </Link>
            </div>
            <div className="menuButton" role="button" tabIndex={0} onKeyPress={e => e.code === "Enter" && onClick()} onClick={() => onClick()}>
                <div className="menuButton__bar1"></div>
                <div className="menuButton__bar2"></div>
                <div className="menuButton__bar3"></div>
            </div>
        </header>
    );
};

export default Header;
