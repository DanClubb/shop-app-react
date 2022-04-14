import "./IconBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function IconBar() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className="icon-container">
      <Link to="/" className="icon icon-home">
        <img
          src="https://img.icons8.com/small/16/000000/home.png"
          width="20px"
          height="20px"
          alt=""
        />
      </Link>
      <Link to="/shopping-cart" className="icon">
        <img
          src="https://img.icons8.com/small/16/000000/shopping-cart.png"
          width="20px"
          height="20px"
          alt=""
        />
      </Link>
      {isLoggedIn && (
        <Link to="/account" className="icon icon-profile">
          <img
            src="https://img.icons8.com/small/16/000000/contacts.png"
            width="20px"
            height="20px"
            alt=""
          />
        </Link>
      )}
      {!isLoggedIn && (
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      )}
    </div>
  );
}

export default IconBar;
