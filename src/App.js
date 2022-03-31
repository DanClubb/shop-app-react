import { Route } from "react-router-dom";
import IconBar from "./components/IconBar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewellery from "./pages/Jewellery";
import Electronics from "./pages/Electronics";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div>
      <IconBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/men">
        <Men />
      </Route>
      <Route path="/women">
        <Women />
      </Route>
      <Route path="/jewellery">
        <Jewellery />
      </Route>
      <Route path="/electronics">
        <Electronics />
      </Route>
      <Route path="/shopping-cart">
        <ShoppingCart />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/account">
        {!isLoggedIn && (
          <div>
            <p>You need to login to view this page.</p>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <h1>Your Account</h1>
            <button onClick={authCtx.logout}>Log Out</button>
          </div>
        )}
      </Route>
    </div>
  );
}

export default App;
