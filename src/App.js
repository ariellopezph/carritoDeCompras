import React from "react";
import { Header } from "./Components/Header/Index.js";
import { ProductList } from "./Components/Products/index.js";
import 'boxicons';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
