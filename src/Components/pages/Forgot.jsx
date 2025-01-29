import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../css/Forgot.css";

const Forgot = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/clients");
      };
      const handleVerification = () => {
        navigate("/verification");
      };
 

  return (
    <section className="forgot-section">
      <div className="container forgot-container">
        <div className="Card1-container">
          <div className="row">
            <div className="forgot-logo mb-3 text-center">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </div>
            <h2 className="forgot-head text-center">Forgot Password</h2>
            <form>
              <div className="form-group">
                <label className="forgot-label">Enter your Email</label>
                <input type="email" id="email" placeholder="Email" />
              </div>

              <div className="buttons">
              <button type="submit" className="signup-button" onClick={handleVerification} >
                Send OTP
                </button>
                <button type="submit" className="login-button" onClick={handleLogin} >
                ← Back to login
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
