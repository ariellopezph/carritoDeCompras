import React, {useContext} from "react";
import Logo from "../Img/logo.webp";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart

    const toogleTrue = () =>{
        setMenu(!menu);
    }

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
                <div className="cart_icon" onClick={toogleTrue}>
                    <box-icon name="cart"></box-icon>
                    <span className="all_item">{cart.length}</span>
                </div>
            </header>
        </div>
    )
}