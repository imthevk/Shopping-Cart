import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductContextProvider from "./Global/ProductContext";
import Products from "./components/Products";
import Cart from './components/Cart'
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Banner />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
