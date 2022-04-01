import "../components/Products.css";

function Products({ products }) {
  let productsToStore = {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products")).products
      : [],
  };
  let alreadyStored = false;

  const checkIfProductInLocalStorage = (product) => {
    for (let i = 0; i < productsToStore.products.length; i++) {
      if (product.id === productsToStore.products[i].id) {
        alreadyStored = true;
        return;
      } else {
        alreadyStored = false;
      }
    }
  };

  const addProductToLocalStorage = (product) => {
    checkIfProductInLocalStorage(product);
    if (!alreadyStored) {
      if (localStorage.getItem("products")) {
        productsToStore.products = JSON.parse(
          localStorage.getItem("products")
        ).products;
      }

      productsToStore.products.push(product);
      let productsToStore_serialized = JSON.stringify(productsToStore);
      localStorage.setItem("products", productsToStore_serialized);
    }
  };

  return (
    <main className="products-container">
      {products.map((product) => (
        <article className="product">
          <img className="product__img" src={product.image} alt="" />
          <label className="product-price">
            Price:
            <span>{" " + product.price}</span>
          </label>
          <label className="product-description">
            Description:
            <span>{" " + product.description}</span>
          </label>
          <button
            className="btn-add"
            onClick={() => addProductToLocalStorage(product)}
          >
            {console.log(alreadyStored)}
            {/* {alreadyStored && "ADDED ✓"} */}
            {/* {!alreadyStored && "ADD to Cart"} */}
            ADD to Cart
          </button>
        </article>
      ))}

      {products.map((product) => (
        <article className="product">
          <img className="product__img" src={product.image} alt="" />
          <label className="product-price">
            Price:
            <span>{" " + product.price}</span>
          </label>
          <label className="product-description">
            Description:
            <span>{" " + product.description}</span>
          </label>
          <button
            className="btn-add"
            onClick={() => addProductToLocalStorage(product)}
          >
            {console.log(alreadyStored)}
            {/* {alreadyStored && "ADDED ✓"} */}
            {/* {!alreadyStored && "ADD to Cart"} */}
            ADD to Cart
          </button>
        </article>
      ))}
    </main>
  );
}

export default Products;
