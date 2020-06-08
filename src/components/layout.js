import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import "./AppSmartphone.css";
import "./AppDesktop.css";

const Layout = ({ children, onMouseMove }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <div id="wrapper">
                <Header
                    setMenuVisible={setMenuVisible}
                    menuVisible={menuVisible}
                />
                {menuVisible && <Menu setMenuVisible={setMenuVisible} />}
                <main role="main">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
