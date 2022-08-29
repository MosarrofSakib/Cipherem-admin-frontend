import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ title, Icon, to }) => {
  return (
    <Link to={to} className="card-main">
      <div className="card-icon">{Icon}</div>
      <div className="card-title">{title}</div>
    </Link>
  );
};

export default Card;
