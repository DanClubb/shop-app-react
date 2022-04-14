import { useState } from "react";
import "./ShoppingCartProducts.css";

function ShoppingCartProducts(props) {
  const [basket, setBasket] = useState({});

  const incrementQuantity = (id, incrementValue) => {
    let updatedBasket = { ...basket };

    if (updatedBasket[id]) {
      let updatedQuanity = incrementValue + updatedBasket[id];
      if (updatedQuanity >= 0) {
        updatedBasket[id] = updatedQuanity;
      }
    } else if (incrementValue > 0) {
      updatedBasket[id] = 2;
    }

    setBasket(updatedBasket);
  };

  const removeFromCart = (product) => {
    props.onRemoveFromCart(product);
  };

  return (
    <div className="cart">
      {props.products &&
        props.products.map((product) => (
          <article className="cart-product">
            <div className="cart-product-img-price">
              <img className="cart-product__img" src={product.image} alt="" />
              <label className="cart-product-price">
                Price: <span>{" £" + product.price}</span>
              </label>
            </div>
            <div className="quantity">
              <label>
                QTY:
                <span>
                  {!basket[product.id] && 1}
                  {basket[product.id] > 0 && basket[product.id]}
                </span>
              </label>
              <div className="quantity-controls">
                <button
                  className="btn btn-increase"
                  onClick={() => incrementQuantity(product.id, 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-decrease"
                  onClick={() => incrementQuantity(product.id, -1)}
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
      {!props.products.length > 0 && (
        <p className="no-items">No items in cart</p>
      )}
    </div>
  );
}

export default ShoppingCartProducts;
