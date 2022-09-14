import React, { useState, useEffect, createContext } from "react";
import Data from "./Data.js"

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([])


    useEffect(() =>{
        const producto = Data.items
        if (products){
            setProducts(producto)
        }else{
            setProducts([])
        }
    },[])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = products.filter(product => {
                return product.id === id
            })
        setCart([...cart, ...data])
        }else{
            alert("El producto ya fue agregado")
        }
    }


    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartData'))
        if(cartData){
            setCart(cartData)
        }
    },
       [])
    
    useEffect(() =>{
        localStorage.setItem('cartData', JSON.stringify(cart))
    },
        [cart])

    const value = {
        products : [products],
        menu : [menu, setMenu],
        addCart : addCart,
        cart : [cart, setCart]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}