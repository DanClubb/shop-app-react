import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

const retrieveStoredValues = () => {
  const storedToken = localStorage.getItem("token");
  const storedIsAdmin = localStorage.getItem("isAdmin");

  let values = {
    storedToken,
    storedIsAdmin,
  };

  return values;
};

export const AuthContextProvider = (props) => {
  const initialToken = retrieveStoredValues().storedToken;
  const initialIsAdmin = retrieveStoredValues().storedIsAdmin;

  const [token, setToken] = useState(initialToken);
  const [isAdmin, setIsAdmin] = useState(initialIsAdmin);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    if (email === "admin@admin.com") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", email);
    }

    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    isAdmin: isAdmin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
