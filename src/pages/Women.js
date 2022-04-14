import NavBar from "../components/UI/NavBar";
import { useState, useEffect } from "react";
import db from "../firestore";
import { collection, getDocs } from "firebase/firestore";
import Products from "../components/Products/Products";

function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(collection(db, "women"));
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);
  return (
    <div>
      <h1>Women</h1>
      <NavBar />
      <Products products={products} />
    </div>
  );
}

export default Women;
