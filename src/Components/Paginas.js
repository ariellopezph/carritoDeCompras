import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio/index.js";
import { ProductList } from "./Products/index.js";


export const Paginas = ( ) => {
    return (
        <section>
            <Routes>
                <Route path='/' exact element={<Inicio/>}/>
                <Route path='/Products' exact element={<ProductList/>}/>
            </Routes>
        </section>
    )
}