import { useContext } from "react";
import NotAdmin from "../components/Admin/NotAdmin";
import Admin from "../components/Admin/Admin";
import AuthContext from "../store/auth-context";
import "./Account.css";

function Account() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const admin = true;

  return (
    <div>
      {!isLoggedIn && (
        <div>
          <p>You need to login to view this page.</p>
        </div>
      )}
      {isLoggedIn && (admin ? <Admin /> : <NotAdmin />)}
    </div>
  );
}

export default Account;
