import { useState } from "react";
import "./ShoppingCartProducts.css";

function ShoppingCartProducts() {
  const [storedProductsObj, setStoredProductsObj] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  const [storedProducts, setStoredProducts] = useState(
    storedProductsObj.products
  );
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = (incrementValue) => {
    let currentQuantity = quantity;
    if (currentQuantity + incrementValue > 0)
      setQuantity(currentQuantity + incrementValue);
  };

  const removeFromCart = (product) => {
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
    <div className="cart">
      {storedProducts &&
        storedProducts.map((product) => (
          <article className="cart-product">
            <div className="cart-product-img-price">
              <img className="cart-product__img" src={product.image} alt="" />
              <label className="cart-product-price">
                Price: <span>{" " + product.price}</span>
              </label>
            </div>
            <div className="quantity">
              <label>
                QTY: <span>{quantity}</span>
              </label>
              <div className="quantity-controls">
                <button
                  className="btn btn-increase"
                  onClick={() => incrementQuantity(1)}
                >
                  +
                </button>
                <button
                  className="btn btn-decrease"
                  onClick={() => incrementQuantity(-1)}
                >
                  -
                </button>
              </div>
            </div>
            <button
              className="btn btn-remove"
              onClick={() => removeFromCart(product)}
            >
              REMOVE ITEM
            </button>
          </article>
        ))}
      {!storedProducts.length > 0 && (
        <p className="no-items">No items in cart</p>
      )}
    </div>
  );
}

export default ShoppingCartProducts;
