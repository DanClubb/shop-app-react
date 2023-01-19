import Checkout from "../components/ShoppingCart/Checkout";
import NavBar from "../components/UI/NavBar";
import ShoppingCartProducts from "../components/ShoppingCart/ShoppingCartProducts";

import "./ShoppingCart.css";
import { Fragment } from "react";

function ShoppingCart() {
  document.querySelector("body").style.overflow = "visible";
  return (
    <Fragment>
      <h1>Shopping Cart</h1>
      <NavBar />
      <main className="cart-container">
        <ShoppingCartProducts />
        <Checkout />
      </main>
    </Fragment>
  );
}

export default ShoppingCart;
