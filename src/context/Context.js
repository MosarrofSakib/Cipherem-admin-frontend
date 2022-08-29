import React, { createContext, useEffect, useContext, useState } from "react";
import { isAuthenticated } from "../service/Auth/AuthService";
import Login from "../Page/Login/Login";

const AppContext = createContext(undefined);

// Hook to provide access to context object
export const UseAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navActive, setNavActive] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = isAuthenticated();
      if (cuser === null) {
        localStorage.setItem("user", "");
        cuser = "";
      }

      setCurrentUser(cuser);
      setIsLoggedIn(true);
    };

    checkLoggedIn();
  }, []);

  // Assign React state and constants to context object
  const AppContextObject = {
    nav: {
      navActive,
      setNavActive,
    },
    authValue: {
      isLoggedIn,
      setIsLoggedIn,
      currentUser,
      setCurrentUser,
    },
  };
  return (
    <AppContext.Provider value={AppContextObject}>
      {currentUser?.token ? children : <Login />}
    </AppContext.Provider>
  );
};
