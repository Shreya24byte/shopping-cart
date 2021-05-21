import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Checkout } from "./components/Checkoutpage";

export default function App() {
  const [cartItems, updateCartItems] = useState([]);
  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/checkout">
            <Checkout cartItems={cartItems} updateCartItems={updateCartItems} />
          </Route>
          <Route path="/">
          <Products updateCartItems={updateCartItems} cartItems={cartItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
