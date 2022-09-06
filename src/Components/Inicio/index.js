import React from "react";
import { Link } from "react-router-dom";
import img from "../Img/inicioImg.jpg";


export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h3 className="title">Inicio</h3>
            </Link>
            <Link to="/Products">
                <h3 className="title">Productos</h3>
            </Link>
            <img src={img} alt="inicio"/>
            
        </div>
    )
}