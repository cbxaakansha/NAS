import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Nav1.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import notification from "../../assets/Notification.png";
import hamburger from "../../assets/Header.png";

const Nav1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="nav1-section">
      <div className="container nav1-container position-relative">
        <div className="row navbar1-row">
          <div className="col-2 col-sm-2 col-md-2 logo1 text-center">
            <Link to="/">
              <img src={logo} alt="logo-img" className="img-fluid logo-img-white" />
            </Link>
          </div>
          <div className="col-4 col-sm-3 col-md-3 lang-icon1 text-right position-relative">
            <img src={notification} alt="notification-icon" className="img-fluid notification " />
            <img
              src={hamburger}
              alt="hamburger-icon"
              className="img-fluid hamburger"
              onClick={toggleMenu}
              style={{ cursor: 'pointer' }}
            />
            {isMenuOpen && (
              <div className="menu-container1" ref={menuRef}>
                <div className="Menu-items">
                  <li>
                    <h2>My First Last</h2>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/profile');
                        closeMenu();
                      }}
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/changePassword');
                        closeMenu();
                      }}
                    >
                      Change Password
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/payment');
                        closeMenu();
                      }}
                    >
                      Payment Method
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/changeLanguage');
                        closeMenu();
                      }}
                    >
                      Change Language
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/contact');
                        closeMenu();
                      }}
                    >
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      Log out
                    </button>
                  </li>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav1;
