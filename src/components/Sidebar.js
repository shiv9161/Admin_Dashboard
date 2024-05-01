import React from "react";

const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-primary"
        style={{ width: "245px", height: "730px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4 text-white">
            <b>CHAUHAN...</b>
          </span>
        </a>
        <hr className="text-white" />
        <ul className="nav nav-pills flex-column mb-auto pb-3">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="20">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              All Teacher
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Library
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Driver Journey
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              All Tables
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Transactions
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark text-white p-3">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Department
            </a>
          </li>
        </ul>
        <hr className="text-white" />
        <div className="dropdown">
          <a
            href="/"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2 "
            />
            <strong className="text-white">mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="/">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
