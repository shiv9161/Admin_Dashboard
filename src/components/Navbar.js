import React from "react";
import { VscSettings } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <b className="text-primary">Welcome, Shiv!!</b>
        </a>
        <div>
          <a href="/">
            <VscSettings size={30} style={{ marginRight: "70px" }} />
          </a>
          <a href="/">
            <FaBell size={30} style={{ marginRight: "10px" }} />
          </a>
          <a href="/">
            <FaUserCircle size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
