import React from "react";
import Logo from "../Img/logo.webp";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <header>
                <Link to="/Inicio">
                    <div className="logo">
                        <img src={Logo} alt="logo" height={"100px"}></img>
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link className="lnk" to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className="lnk" to="/Products">Productos</Link>
                    </li>
                </ul>
                <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="all_item">0</span>
                </div>
            </header>
        </div>
    )
}