import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function NotAdmin() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <h1>Your Account</h1>
      <div className="account-options">
        <div className="admin-selection">
          <label for="admin">Admin</label>
          <input type="checkbox" id="admin" name="admin" value="false" />
        </div>
        <div className="buttons">
          <button className="account-btn">Save Changes</button>
          <button className="account-btn" onClick={authCtx.logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotAdmin;
