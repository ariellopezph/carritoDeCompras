import React, {useContext} from "react";
import Image from "../Img/img5.jpg"
import { DataContext } from "../Context/DataProvider.js"
import { ProductItem } from "../Products/ProductItem";

export const Cart = ()  => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = value.cart;
    const [total] = value.total;

    const toogleFalse = () =>{
        setMenu(false);
    }

    

    const show1 = menu ? "carts show" : "carts";
    const show2 = menu ? "cart show" : "cart";
    const removeProduct = id => {
        if(window.confirm("Quieres eliminar el producto del carrito?")){
            cart.forEach((item, index) => {
                if(item.id === id){
                    item.cantidad = 1;
                cart.splice(index, 1)
                }
                
            })
            setCart([...cart])
        }
        
    }
    const rest = id => {
        cart.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCart([...cart])
        })
    }

    const add = id => {
        cart.forEach(item =>{
            if(item.id === id){
                item.cantidad +=1;
            }
            setCart([...cart])
        })
    }

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="cart_close" onClick={toogleFalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <div className="cart_title"><h3>Carrito</h3></div>
                <>
                {
                    cart.length === 0 ? <h3 style = {{
                        textAlign: "center", fontSize: "3rem"
                    }}> Carrito vacio </h3> : 

                    cart.map((product) =>(

                   
                        <div className="cart_center">
                            <div className="cart_item" key={ product.id }>
                                <div>
                                    <img src={ product.image } alt=""/>
                                </div>
                                <div>
                                    <h3>{ product.title }</h3>
                                    <p className="price"> ${ product.price } </p>
                                </div>
                                <div className="selector">
                                    <box-icon name="up-arrow" type="solid" onClick={() => add(product.id)}></box-icon>
                                    <p className="cantidad"> { product.cantidad } </p>
                                    <box-icon name="down-arrow" type="solid" onClick={() => rest(product.id)}></box-icon>
                                </div>
                                <div className="remove_item" onClick={ () => removeProduct(product.id)}>
                                    <box-icon name="trash"></box-icon>
                                </div>
                            </div>
                        </div>
                 ))
                
    
                }
                </>
                <div className="cart_footer">
                    <h3>Total: ${total}</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    )
}