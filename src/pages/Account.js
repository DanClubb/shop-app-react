import { useContext } from "react";
import AuthContext from "../store/auth-context";

function Account() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div>
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
    </div>
  );
}

export default Account;
