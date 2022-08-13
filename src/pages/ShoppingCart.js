import Checkout from "../components/ShoppingCart/Checkout";
import NavBar from "../components/UI/NavBar";
import ShoppingCartProducts from "../components/ShoppingCart/ShoppingCartProducts";

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
