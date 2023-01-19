import { Fragment } from "react";
import { Route } from "react-router-dom";
import IconBar from "./components/UI/IconBar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewellery from "./pages/Jewellery";
import Electronics from "./pages/Electronics";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {
  return (
    <Fragment>
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
        <Account />
      </Route>
    </Fragment>
  );
}

export default App;
