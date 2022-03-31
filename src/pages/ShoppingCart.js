import Checkout from "../components/Checkout";
import NavBar from "../components/NavBar";
import ShoppingCartProducts from "../components/ShoppingCartProducts";

import "./ShoppingCart.css";

function ShoppingCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <NavBar />
      <main className="cart-container">
        <ShoppingCartProducts />
        <Checkout />
      </main>
    </div>
  );
}

export default ShoppingCart;
