import React from "react";
import { Header } from "./Components/Header/Index.js";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./Components/Paginas.js";
import { DataProvider } from "./Components/Context/DataProvider.js";
import { Cart } from "./Components/Cart/index.js"




function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <Cart/>
          <Paginas/>
        </Router>
      </div>
      </DataProvider>
    
  );
}

export default App;
