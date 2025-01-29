import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import icon from "../../assets/lang-icon.png";

const Navbar = () => {
  return (
    <section className="nav-section">
      <div className="container nav-container">
        <div className="row navbar-row">
          <div className="col-2 col-md-1 logo text-center">
          <Link to="/">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </Link>
          </div>
          <div className="col-8 col-md-10 Nav-buttons text-center">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/clients">Clients</Link>
              </li>
              <li>
                <Link to="/worker">Workers</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-2 col-md-1 lang-icon text-center">
            <img src={icon} alt="lang-icon" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
