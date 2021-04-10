import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="logo__logo">
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color-800x272.png"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
