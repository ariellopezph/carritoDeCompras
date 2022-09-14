import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { ProductItem } from "./ProductItem";


export const ProductList = () => {

    const value = useContext(DataContext)
    const [products] = value.products

    console.log(products)

    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className="products">
            {
                products.map(product => (
                    <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    />
                    
                ))
            }
            
        </div>
        </>
    )
}