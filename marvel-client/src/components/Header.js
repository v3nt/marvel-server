import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Character list
        </Link>
      </div>
    </div>
  );
};

export default Header;
