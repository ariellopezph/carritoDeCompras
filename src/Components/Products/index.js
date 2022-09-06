import React, { useContext } from "react";
import img1 from "../Img/img1.jpg";
import img2 from "../Img/img2.jpg";
import img3 from "../Img/img3.jpg";
import img4 from "../Img/img4.jpg";
import { DataContext } from "../Context/DataProvider";

export const ProductList = () => {

    const value = useContext(DataContext)
    const [products] = value.products

    console.log(products)

    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className="products">
            <div className="product">
                <a href="#">
                <div className="product_img">
                    <img src={ img1 } alt="img1" width={"250px"} height={"250px"}/>
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
                    <img src={ img2 } alt="img1" width={"250px"} height={"250px"}/>
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
                    <img src={ img3 } alt="img1" width={"250px"} height={"250px"}/>
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
                    <img src={ img4 } alt="img1" width={"250px"} height={"250px"}/>
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