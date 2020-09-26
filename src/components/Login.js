import React, { useState } from "react";
import "../css/Login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((a) => {
          console.log(a);
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("enter email or password");
    }
  };
  const login = (e) => {
    e.preventDefault();
    if ((email !== "", password !== "")) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((a) => {
          console.log(a);
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <div className="login_container">
      <img
        className="loginlogo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
        alt=""
      />

      <div className="login_form_div">
        <div className="login_form">
          <h3 className="sign_in_text">Sign In</h3>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button className="login_button" type="submit" onClick={login}>
            Login
          </button>
          <div className="terns_and_candition">
            <input type="checkbox" name="termsAndCandition" />
            <label htmlFor="termsAndCandition" className="termsandcandition">
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </label>
          </div>
          <button className="register_button" onClick={register}>
            {" "}
            create an account
          </button>
        </div>
      </div>
    </div>
  );
}
