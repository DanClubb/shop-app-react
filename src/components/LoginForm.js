import "./LoginForm.css";
import { useContext, useRef, useState } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [errMessage, setErrMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0gCXbuKTvrUwtIY9e9NieNpgHXrEsLhU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0gCXbuKTvrUwtIY9e9NieNpgHXrEsLhU";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setErrMessage("");
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "failed!";
            if (data.error.message) errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.goBack();
      })
      .catch((error) => {
        setErrMessage(error.message);
      });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <section className="auth">
        <form onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={inputEmailRef} />
          </div>
          <div className="control">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={inputPasswordRef}
            />
          </div>
          <div className="actions">
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
      <p
        className="error-message"
        style={{
          dislay: errMessage === "" ? "none" : "block",
          background: errMessage === "" ? "transparent" : "red",
        }}
      >
        {errMessage}
      </p>
    </div>
  );
}

export default LoginForm;
