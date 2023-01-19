import { useContext, Fragment } from "react";
import NotAdmin from "../components/Admin/NotAdmin";
import Admin from "../components/Admin/Admin";
import AuthContext from "../store/auth-context";
import "./Account.css";

function Account() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Fragment>
      {!isLoggedIn && (
        <main>
          <p>You need to login to view this page.</p>
        </main>
      )}
      {isLoggedIn && (authCtx.isAdmin ? <Admin /> : <NotAdmin />)}
    </Fragment>
  );
}

export default Account;
