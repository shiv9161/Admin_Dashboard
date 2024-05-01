import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <b className="text-primary">Welcome, Shiv!!</b>
        </a>

        <button className="btn btn-outline-danger">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
