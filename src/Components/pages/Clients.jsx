import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../css/Clients.css";

const Clients = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleSignUp = () => {
    navigate("/registration");
  };

  return (
    <section className="client-section">
      <div className="container client-container">
        <div className="Card-container">
          <div className="row">
            <div className="client-logo mb-3 text-center">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </div>
            <form>
              <div className="form-group">
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group password-group">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Password*"
                />
                <span
                  className="toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" className="client-checkbox"/> remember me
                </label>
                <a href="/forgot-password" className="forgot-password">
                  Forgot your password?
                </a>
              </div>
              <div className="buttons">
                <button type="submit" className="login-button" onClick={handleLogin}>
                  Login
                </button>
                <p>or</p>
                <button type="submit" className="signup-button" onClick={handleSignUp}>
                  Sign up NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
