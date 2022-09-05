import React from "react";
import img1 from "../Img/product_1.webp";

export const ProductList = () => {
    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className="products">
            <div className="product">
                <a href="#">
                <div className="product_img">
                    <img src={ img1 } alt="img1" width={"250px"}/>
                </div>
                </a>
                <div className="product_footer">
                    <h3> Title </h3>
                    <p> Categoria </p>
                    <p className="price"> $999 </p>
                
                    <div className="button">
                        <button className="btn">
                            Anadir
                        </button>
                        <div className="btn">
                            <a className="lnk" href="#"> Ver carrito</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <a href="#">
                <div className="product_img">
                    <img src={ img1 } alt="img1" width={"250px"}/>
                </div>
                </a>
                <div className="product_footer">
                    <h3> Title </h3>
                    <p> Categoria </p>
                    <p className="price"> $999 </p>
                
                    <div className="button">
                        <button className="btn">
                            Anadir
                        </button>
                        <div className="btn">
                            <a className="lnk" href="#"> Ver carrito</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <a href="#">
                <div className="product_img">
                    <img src={ img1 } alt="img1" width={"250px"}/>
                </div>
                </a>
                <div className="product_footer">
                    <h3> Title </h3>
                    <p> Categoria </p>
                    <p className="price"> $999 </p>
                
                    <div className="button">
                        <button className="btn">
                            Anadir
                        </button>
                        <div className="btn">
                            <a className="lnk" href="#"> Ver carrito</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <a href="#">
                <div className="product_img">
                    <img src={ img1 } alt="img1" width={"250px"}/>
                </div>
                </a>
                <div className="product_footer">
                    <h3> Title </h3>
                    <p> Categoria </p>
                    <p className="price"> $999 </p>
                
                    <div className="button">
                        <button className="btn">
                            Anadir
                        </button>
                        <div className="btn">
                            <a className="lnk" href="#"> Ver carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}