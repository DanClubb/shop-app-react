import "./Checkout.css";
import { useUser } from "../../store/cart-context";

function Checkout() {
  let { basket } = useUser();

  const calculateTotalPrice = () => {
    let totalPrice = Object.keys(basket).reduce((total, id) => {
      return total + basket[id].price * basket[id].quantity;
    }, 0);
    return totalPrice;
  };

  return (
    <section className="checkout">
      <p className="total-price">
        Total:<span>{" £" + calculateTotalPrice()}</span>{" "}
      </p>
      <button className="checkout-button">Checkout</button>
    </section>
  );
}

export default Checkout;
