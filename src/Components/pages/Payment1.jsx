import React from 'react'
import "../css/Payment1.css";
import Google from "../../assets/google.png";
import  paypal from "../../assets/paypal.png";
import apple from "../../assets/apple.png";
import American from "../../assets/American.png";
import Master from "../../assets/Master.png";
import Visa from "../../assets/visa.png";
const Payment1 = () => {
  

  return (
    <section className='payment1-section'>
    <div className="container payment1-container">
    <div className="Card2-container">
    <div className="row ">
      <h2 className='payment1-head text-center'>Payment Method</h2>
      <div className="payment1-icons">
        <img src={Master} alt="MasterCard" className="selected" />
        <img src={Visa} alt="Visa" />
        <img src={American} alt="American Express" />
        <img src={apple} alt="Apple Pay" />
        <img src={paypal} alt="PayPal" />
        <img src={Google} alt="Google Pay" />
      </div>
      <form className="payment1-form">
        <div className="form-group3">
          <label>Card Holder Name</label>
          <input
            type="text"
            className="input-field"
          />
        </div>
        <div className="form-group3">
          <label>Card Number</label>
          <input
            type="text"
            className="input-field"
          />
        </div>
        <div className="form-row">
          <div className="form-group3">
            <label>Expiry</label>
            <input
              type="text"
              className="input-field"
            />
          </div>
          <div className="form-group3">
            <label>CVV</label>
            <input
              type="text"
              className="input-field"
            />
          </div>
        </div>
        <button type="button" className="payment1-button">
          Pay Now
        </button>
      </form>
    </div>
</div>
    </div>
    </section>
  );
};

export default Payment1;
