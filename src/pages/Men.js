import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import db from "../firestore";
import { collection, getDocs } from "firebase/firestore";
import Products from "../components/Products";

function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(collection(db, "Men"));
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Men</h1>
      <NavBar />
      <Products products={products} />
    </div>
  );
}

export default Men;
