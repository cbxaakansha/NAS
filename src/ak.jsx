import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    // Simulate email verification process
    setError("");
    alert("Password reset instructions sent to " + email);
  };

  return (
    <section className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
        <div className="text-center">
          <img src={logo} alt="Logo" className="mb-3" style={{ width: "80px" }} />
          <h2 className="h5">Forgot Password?</h2>
          <p className="text-muted">No worries, we’ll send you reset instructions.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3 position-relative">
            <IoMailOutline className="position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary" size={20} />
            <input
              type="email"
              className="form-control ps-4"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger small mt-2">{error}</p>}
          <button type="submit" className="btn btn-primary w-100">
            Reset Password
          </button>
        </form>
        <div className="d-flex justify-content-between mt-3">
          <button onClick={() => navigate("/login")} className="btn btn-link p-0">
            ← Back to Login
          </button>
          <button onClick={() => navigate("/signup")} className="btn btn-link p-0">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
