import "./Products.css";
import { useUser } from "../../store/cart-context";

function Products(props) {
  let { productsInBasket, products, addToBasket } = useUser();

  const categoryFilter = (id, category) => {
    return products[id].category === category;
  };

  return (
    <main className="products-container">
      {Object.keys(products)
        .filter((id) => categoryFilter(id, props.category))
        .map((id, index) => (
          <article key={index} className="product">
            <img className="product__img" src={products[id].image} alt="" />
            <label className="product-price">
              Price:
              <span>{" £" + products[id].price}</span>
            </label>
            <label className="product-description">
              Description:
              <span>{" " + products[id].description}</span>
            </label>
            <button
              className="btn-add"
              onClick={() => addToBasket(id, products[id].price)}
            >
              {productsInBasket.includes(id) && "In Cart"}
              {!productsInBasket.includes(id) && "ADD to Cart"}
              {/* <span className="inline-remove">X</span> */}
            </button>
          </article>
        ))}

      {Object.keys(products)
        .filter((id) => {
          return products[id].category === props.category;
        })
        .map((id, index) => (
          <article key={index} className="product">
            <img className="product__img" src={products[id].image} alt="" />
            <label className="product-price">
              Price:
              <span>{" £" + products[id].price}</span>
            </label>
            <label className="product-description">
              Description:
              <span>{" " + products[id].description}</span>
            </label>
            <button
              className="btn-add"
              // onClick={() => addProductToLocalStorage(id)}
            >
              ADD to Cart
            </button>
          </article>
        ))}
    </main>
  );
}

export default Products;
