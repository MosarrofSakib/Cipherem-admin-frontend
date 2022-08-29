import React from "react";
import "./main.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const Main = ({ children }) => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="main-body">
        <Header />
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Main;
