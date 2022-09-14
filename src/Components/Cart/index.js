import React, {useContext} from "react";
import Image from "../Img/img5.jpg"
import { DataContext } from "../Context/DataProvider.js"
import { ProductItem } from "../Products/ProductItem";

export const Cart = ()  => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = value.cart;

    const toogleFalse = () =>{
        setMenu(false);
    }

    

    const show1 = menu ? "carts show" : "carts";
    const show2 = menu ? "cart show" : "cart";

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="cart_close" onClick={toogleFalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <div className="cart_title"><h3>Carrito</h3></div>
                {
                    cart.map((product) =>(

                   
                <div className="cart_center">
                    <div className="cart_item">
                        <div>
                            <img src={ product.image } alt=""/>
                        </div>
                        <div>
                            <h3>{ product.title }</h3>
                            <p className="price"> { product.price } </p>
                        </div>
                        <div className="selector">
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad"> { product.cantidad } </p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove_item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                </div>
                 ))
                }
                <div className="cart_footer">
                    <h3>Total: $999</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    )
}