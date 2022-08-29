import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { login } from "../../service/Auth/AuthService";

import profile from "../../Images/a.png";
import { GoMail } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = ({ location }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(mail, pass);
      if (data) {
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div className="main">
      <div className="sub-main">
        <form onSubmit={handleLogin}>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <GoMail className="email" />
              <input
                type="text"
                value={mail}
                placeholder="user name"
                className="login-input name"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </div>
            <div className="second-input">
              <RiLockPasswordLine className="email" />
              <input
                type="password"
                value={pass}
                placeholder="password"
                className="login-input name"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div className="login-button">
              <button className="btn-login" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
