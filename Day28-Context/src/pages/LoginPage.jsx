import { useContext } from "react";
import { AuthContext } from "../App";

import HeroImg from "./../assets/login.svg";

function LoginPage() {
  let { Auth, setAuth } = useContext(AuthContext);

  const LoginHandler = () => {
    // authentication
    // axios
    // cookie
    setAuth("user");
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <div className="content2">
          <h1>Zoho.</h1>
          <p>
            A central hub where teams can work, plan, <br /> and achieve amazing
            things together.
          </p>
          <img src={HeroImg} alt="" />
        </div>
        <div className="login">
          <span className="english">English (USA)</span>
          <div className="start">
            <span className="free">START FOR FREE</span>
            <span className="sign">Sign up to Zoho</span>
            <div className="member">
              <span className="already">Already a member?</span>
            </div>
            <div className="input">
              <span>E-mail</span>
              <input type="email" placeholder="name@mail.com" />
              <span>Password</span>
              <input
                type="email"
                placeholder="6+ Characters, 1 Capital letter"
              />
            </div>
            <div className="button">
              <button className="primary" onClick={LoginHandler}>
                Login
              </button>
              <button className="secondary">Sign up with Google</button>
            </div>
          </div>
          <p className="text">
            <span> This site is protected by reCAPTCHA and the Google</span>{" "}
            <span className="blue"> Privacy Policy </span>and
            <span className="blue"> Terms of Service </span> apply
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
