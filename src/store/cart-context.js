import React, { useState, useContext, useEffect, useCallback } from "react";
import db from "../firestore";
import { collection, getDocs } from "firebase/firestore";
const UserContext = React.createContext();

export const UserProvider = ({ ...props }) => {
  const [products, setProducts] = useState({});
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
      ? { ...JSON.parse(localStorage.getItem("basket")) }
      : {}
  );

  const productsInBasket = Object.keys(products).filter((id) => {
    return basket[id];
  });

  useEffect(() => {
    const getProducts = async () => {
      const menData = await getDocs(collection(db, "Men"));
      const womenData = await getDocs(collection(db, "women"));
      const allProducts = {};
      menData.docs.map((doc) => {
        allProducts[doc.id] = doc.data();
      });
      womenData.docs.map((doc) => {
        allProducts[doc.id] = doc.data();
      });
      setProducts(allProducts);
    };

    getProducts();
  }, []);

  const addToLocalStorage = useCallback(() => {
    let basket_serialized = JSON.stringify(basket);
    localStorage.setItem("basket", basket_serialized);
  }, [basket]);

  const checkIfProductInBasket = (id) => {
    if (basket[id]) return basket[id];
    else return 0;
  };

  const addToBasket = (id, productPrice) => {
    let updatedBasket = {
      ...basket,
      [id]: basket[id] ? basket[id] : { quantity: 1, price: productPrice },
    };
    setBasket(updatedBasket);
  };

  const incrementQuantity = (id, incrementValue) => {
    let updatedBasket = { ...basket };

    let updatedQuanity = incrementValue + updatedBasket[id].quantity;
    if (updatedQuanity > 0) {
      updatedBasket[id].quantity = updatedQuanity;
    }

    setBasket(updatedBasket);
  };

  const removeFromCart = (id) => {
    let updatedBasket = { ...basket };

    delete updatedBasket[id];

    setBasket(updatedBasket);
  };

  addToLocalStorage();

  return (
    <UserContext.Provider
      value={{
        basket,
        products,
        productsInBasket,
        checkIfProductInBasket,
        addToBasket,
        incrementQuantity,
        removeFromCart,
      }}
      {...props}
    />
  );
};

export const useUser = () => useContext(UserContext);

export default UserContext;
