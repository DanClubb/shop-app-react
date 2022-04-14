import Checkout from "../components/ShoppingCart/Checkout";
import NavBar from "../components/UI/NavBar";
import ShoppingCartProducts from "../components/ShoppingCart/ShoppingCartProducts";
import { useState } from "react";

import "./ShoppingCart.css";

function ShoppingCart() {
  const [storedProductsObj, setStoredProductsObj] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const [storedProducts, setStoredProducts] = useState(
    storedProductsObj.products
  );
  console.log(storedProducts);

  const removeFromCartHandler = (product) => {
    for (let i = 0; i < storedProducts.length; i++) {
      if (product.id === storedProducts[i].id) {
        let currentStoredProducts = storedProducts;
        currentStoredProducts.splice(i, 1);
        setStoredProducts(currentStoredProducts);
        setStoredProductsObj({ products: storedProducts });

        let storedProducts_serialized = JSON.stringify(storedProductsObj);
        localStorage.setItem("products", storedProducts_serialized);
      }
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <NavBar />
      <main className="cart-container">
        <ShoppingCartProducts
          products={storedProducts}
          onRemoveFromCart={removeFromCartHandler}
        />
        <Checkout products={storedProducts} />
      </main>
    </div>
  );
}

export default ShoppingCart;
