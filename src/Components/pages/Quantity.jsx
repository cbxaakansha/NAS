import React from "react";
import WaiterIcon from "../../assets/Info.png";
import "../css/Quantity.css";

const Quantity = () => {
  return (
    <section className="quantity-section">
      <div className="container quantity-container">
        <h2>Enter Quantity <span className='star-span'>*</span></h2>
        <div className="quantity-form">
          <div className="quantity-details">
            <ul>
              <li className="row mb-3 align-items-center">
                <label className="quantity-label d-flex align-items-center">
                  <span className="col-5 quantity-text mx-2">Waiter</span>
                  <input type="text" className="col-7 quantity-input" />
                </label>
              </li>
              <li className="row align-items-center">
                <label className="quantity-label d-flex align-items-center">
                  <span className="col-5 quantity-text mx-2">Housekeeping</span>
                  <input type="text" className="col-7 quantity-input" />
                </label>
              </li>
            </ul>
          </div>
          <h2>Gender Preferences <span className='star-span'>*</span> </h2>
          <div className="quantity-details">
            <ul>
              <li className="row  mb-4">
                <span className="col-5 quantity-text">Waiter</span>
                <div className="col-7 d-flex justify-content-between gender-preference">
                  <label>
                  <span>Male</span>
                    <input type="radio" name="waiter-gender" value="male" />
                    
                  </label>
                  <label>
                  <span>Female</span>
                    <input type="radio" name="waiter-gender" value="female" />
                    
                  </label>
                  <label>
                  <span>Default</span>
                    <input type="radio" name="waiter-gender" value="default" />
                    
                  </label>
                </div>
              </li>
              <li className="row  mb-4">
                <span className="col-5 quantity-text">Housekeeping</span>
                <div className="col-7 d-flex justify-content-between gender-preference">
                  <label>
                  <span>Male</span>
                    <input
                      type="radio"
                      name="housekeeping-gender"
                      value="male"
                    />
                    
                  </label>
                  <label>
                  <span>Female</span>
                    <input
                      type="radio"
                      name="housekeeping-gender"
                      value="female"
                    />
                    
                  </label>
                  <label>
                  <span>Default</span>
                    <input
                      type="radio"
                      name="housekeeping-gender"
                      value="default"
                    />
                    
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quantity;
