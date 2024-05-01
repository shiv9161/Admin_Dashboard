import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Dashboard
        </a>

        <button className="btn btn-outline-danger">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
