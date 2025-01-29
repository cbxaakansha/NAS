import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/CreatePassword.css";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    navigate("/clients");
  };

  return (
    <section className="createPassword-section">
      <div className="container createPassword-container">
        <div className="Card1-container">
          <div className="row">
            <div className="createPassword-logo mb-3 text-center">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </div>
            <h2 className="createPassword-head text-center">Create Password</h2>
            <p className="createPassword-para text-center">
              Create a new password for your account.
            </p>
            <form onSubmit={handleLogin}>
              <div className="form-group password-group">
                <label className="createPassword-label">New Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Create New Password"
                />
                <span
                  className="toggle-icon1"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-group password-group">
                <label className="createPassword-label">Confirm New Password</label>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Enter New Password"
                />
                <span
                  className="toggle-icon1"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="buttons">
                <button
                  type="submit"
                  className="signup-button"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
