import React from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";

const NavItem = ({ to, active, icon, name }) => {
  var activeClass = active ? "navitems active" : "navitems";
  return (
    <Link to={to} className={activeClass}>
      <div>{icon}</div>
      <div style={{ marginLeft: "1.5rem" }}>{name}</div>
    </Link>
  );
};

export default NavItem;
