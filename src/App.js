import React, { useState } from 'react';
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
import dataFake from './dataFake';
import Routers from './routers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  )

}
export default App;