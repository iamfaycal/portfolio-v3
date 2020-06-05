import React from "react";
import { Link } from "gatsby";
import "./Footer.css";

const Footer = () => (
    <footer>
        <div>Copyright © {new Date().getFullYear()} Fayçal HAMMOUDI</div>
        <div>
            <span>tout droit réservés</span> |{" "}
            <Link to="/mentions-legales">mentions légales</Link>
        </div>
    </footer>
);

export default Footer;
