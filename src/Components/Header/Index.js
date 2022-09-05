import React from "react";
import Logo from "../Img/logo.webp"

export const Header = () => {
    return (
        <div>
            <header>
                {/* <div className="menu">
                    <box-icon name="menu"></box-icon>
                </div> */}
                <a href="#">
                    <div className="logo">
                        <img src={Logo} alt="logo" height={"100px"}></img>
                    </div>
                </a>
                <ul>
                    <li>
                        <a className="lnk" href="#">Inicio</a>
                    </li>
                    <li>
                        <a className="lnk" href="#">Carrito</a>
                    </li>
                </ul>
                <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="all_item">2</span>
                </div>
            </header>
        </div>
    )
}