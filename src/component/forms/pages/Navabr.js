import React from "react";
import PropTypes from "prop-types";
import "../../static/css/auth.css";
import Home from "./Home";
import Carasuel from "./Carasuel";
// import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";

export default function Navabr(props) {
  return (
    <header>
      {/* <div className="container-fluid"> */}
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="index.html">
            <img src="food-orange.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                {/* <a className="nav-link" href="/">Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
                {/* <a className="nav-link" href="about.html">About Us</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signin">
                  Home
                </Link>
              </li>
            </ul>
           
          </div>
        </nav>
      </Router>
      {/* <Outlet /> */}
    </header>
  );
}
Navabr.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navabr.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
