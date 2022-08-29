import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

import { UseAppContext } from "../../context/Context";

const Header = () => {
  //const [login, setLogin] = useState(true);
  const {
    nav: { navActive, setNavActive },
    authValue: { isLoggedIn, setCurrentUser },
  } = UseAppContext();

  const navigate = useNavigate();

  const handleNavActive = () => {
    setNavActive(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setCurrentUser({});
    navigate("/");
  };

  return (
    <>
      <div className="header-main">
        <div className="header-menu">
          {!navActive && <AiOutlineMenu onClick={handleNavActive} />}
        </div>
        <div className="header-logo">Cipherem</div>
        <div className="header-profile">
          {isLoggedIn ? (
            <button className="profile-header" onClick={handleLogOut}>
              <p>Logout</p>
              <div className="space">
                <BiLogOut />
              </div>
            </button>
          ) : (
            <div>Login</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
