import React from "react";
import "../css/Agreement.css";
import { useNavigate } from "react-router-dom";
const Agreement = () => {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate("/registration"); 
  };

  const handleAgree = () => {
    navigate("/dashboard");
  };

  return (
    <section className="agreement-section">
      <div className="container agreement-container">
        <div className="row ">
          <div className="card-content">
            <p>
              Your registration request has been submitted successfully. Please
              read and agree to the terms of use and privacy policy to complete
              the registration process.
            </p>
            <div className="btn-box">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleAgree}>I Agree</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agreement;
