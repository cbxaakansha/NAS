import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../css/OTP.css";

const OTP = () => {
  const [otp, setOtp] = useState([" ", " ", " ", " "]);
  // const [otp, setOtp] = useState([" ", " ", " ", " "]);
const digit = [];
  const navigate = useNavigate();
  const handleverify = () => {
    navigate("/createPassword");
  };

  const handleOtp = (e,index) =>{
 
    digit[index] = e.target.value
    

  }

  return (
    <section className="otp-section">
      <div className="container otp-container">
        <div className="Card1-container">
          <div className="row">
            <div className="otp-logo mb-3 text-center">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </div>
            <h2 className="otp-head text-center">OTP Verification</h2>
            <p className="otp-para text-center">
              We've sent OTP to your gmail at ***@gmail.com . Please enter 4
              digits code you receive.
            </p>
            <form>
              <label className="otp-label">Enter OTP</label>
              <div className="otp-inputs">
                {otp.map((index) => (
                  <input
                    key={index}
                    type="text"
                    id={`otp-${index}`}
                    value={digit[index]}
                    maxLength="1"
                    className="otp-box"
                    autoFocus={index === 0}
                    onChange={(e,index)=>handleOtp(e,index)}
                  />
                ))}
              </div>

              <div className="buttons">
                <button
                  type="submit"
                  className="signup-button"
                  onClick={handleverify}
                >
                  Verify
                </button>
              </div>
              <div>
                <p className="otp-para text-center mt-4">
                  Didn't receive code?
                </p>
                <p className="otp-para1 text-center mt-4">Resend code </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTP;
