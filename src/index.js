import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { UserProvider } from "./store/cart-context";

ReactDOM.render(
  <AuthContextProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
