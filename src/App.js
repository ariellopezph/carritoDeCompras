import React from "react";
import { Header } from "./Components/Header/Index.js";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./Components/Paginas.js";




function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Paginas/>
      </Router>
    </div>
  );
}

export default App;
