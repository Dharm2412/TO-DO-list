import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <li>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              My To-Do List
            </a>
          </div>
        </li>
        <li>
          <Link className="navbar-brand" to="/login">
            Login
          </Link>
        </li>
      </nav>
    </>
  );
}

export default Navbar;
