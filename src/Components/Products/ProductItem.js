import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider"

export const ProductItem = ({
  id,
  title,
  price,
  image,
  category,
}) => {

    const value = useContext(DataContext);
    const addCart = value.addCart;



    return (

        <div>
            <div className="product">
                <a href="#">
                <div className="product_img">
                    <img src={ image } alt={ title } width={"250px"} height={"250px"}/>
                </div>
                </a>
                <div className="product_footer">
                    <h3> { title } </h3>
                    <p> { category } </p>
                    <p className="price"> ${ price } </p>
                
                    <div className="button">
                        <button className="btn" onClick={() => addCart(id)}>
                            Anadir
                        </button>
                        <div className="btn">
                            <a className="lnk" href="#"> Ver carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}