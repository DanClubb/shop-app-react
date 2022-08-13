import { useUser } from "../../store/cart-context";
import "./ShoppingCartProducts.css";

function ShoppingCartProducts() {
  let {
    basket,
    products,
    productsInBasket,
    removeFromCart,
    incrementQuantity,
  } = useUser();

  return (
    <div className="cart">
      {productsInBasket &&
        productsInBasket.map((id) => (
          <article className="cart-product">
            <div className="cart-product-img-price">
              <img
                className="cart-product__img"
                src={products[id].image}
                alt=""
              />
              <label className="cart-product-price">
                Price: <span>{" £" + products[id].price}</span>
              </label>
            </div>
            <div className="cart-product-quantity-remove">
              <div className="quantity">
                <label>
                  QTY:
                  <span>
                    {!basket[id].quantity && 1}
                    {basket[id].quantity > 0 && basket[id].quantity}
                  </span>
                </label>
                <div className="quantity-controls">
                  <button
                    className="btn btn-increase"
                    onClick={() => incrementQuantity(id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-decrease"
                    onClick={() => incrementQuantity(id, -1)}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                className="btn btn-remove"
                onClick={() => removeFromCart(id)}
              >
                REMOVE ITEM
              </button>
            </div>
          </article>
        ))}
      {productsInBasket.length < 1 && (
        <p className="no-items">No items in cart</p>
      )}
    </div>
  );
}

export default ShoppingCartProducts;
