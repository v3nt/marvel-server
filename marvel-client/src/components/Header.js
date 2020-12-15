import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/characters/page/1" className="item">
          Character list
        </Link>
      </div>
    </div>
  );
};

export default Header;
