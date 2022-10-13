import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import AddProduct from "./AddProduct";

function Admin({ isAdmin }) {
  const authCtx = useContext(AuthContext);
  const [addProduct, setAddProduct] = useState(false);

  const addProductHandler = () => {
    setAddProduct((prevState) => !prevState);
  };

  const cancelAddProductHandler = () => {
    setAddProduct((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Your Account</h1>
      <div className="account-options">
        <div className="buttons">
          <div className="add-product">
            {
              <button
                className="account-btn"
                onClick={
                  addProduct ? cancelAddProductHandler : addProductHandler
                }
              >
                {addProduct ? "Cancel" : "Add Product"}
              </button>
            }
            {addProduct && <AddProduct />}
          </div>

          <button className="account-btn" onClick={authCtx.logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
