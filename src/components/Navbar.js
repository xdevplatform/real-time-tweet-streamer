import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui two item menu">
      <NavLink to="/tweets" className="item" target="_blank">
        New Tweets
      </NavLink>
      <NavLink to="/rules" className="item" target="_blank">
        Manage Rules
      </NavLink>
    </div>
  );
};

export default Navbar;
