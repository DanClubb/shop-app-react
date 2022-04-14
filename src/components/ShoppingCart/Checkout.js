import "./Checkout.css";

function Checkout({ products }) {
  const calculateTotalPrice = () => {
    let totalPrice = products.reduce((total, price) => {
      return total + price.price;
    }, 0);
    return totalPrice;
  };

  return (
    <div className="checkout">
      <p className="total-price">Total: </p>
      <span>{" £" + calculateTotalPrice()}</span>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default Checkout;
