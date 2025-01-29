import React from 'react'
import "../css/Nationality.css";

const Nationality = () => {
  return (
    <section className="nationality-section">
      <div className="container nationality-container">
        <h2>Nationality Preferences <span className='star-span'>*</span> </h2>
        <div className="nationality-form">
          <div className="nationality-details">
            <ul>
              <li className="row  mb-4">
                <span className="col-5 nationality-text">Waiter</span>
                <div className="col-7 d-flex justify-content-between gender-preference">
                  <label>
                    <span>Jordanian</span>
                    <input type="radio" name="waiter-gender" value="male" />
                  </label>
                  <label>
                    <span>Default</span>
                    <input type="radio" name="waiter-gender" value="female" />
                  </label>
                </div>
              </li>
              <li className="row  mb-4">
                <span className="col-5 nationality-text">Housekeeping</span>
                <div className="col-7 d-flex justify-content-between gender-preference">
                  <label>
                    <span>Jordanian</span>
                    <input
                      type="radio"
                      name="housekeeping-gender"
                      value="male"
                    />
                  </label>
                  <label>
                    <span>Default</span>
                    <input
                      type="radio"
                      name="housekeeping-gender"
                      value="female"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <h2>Work Period <span className='star-span'>*</span> </h2>
          <div className="nationality-details">
            <ul>
              <li className="row align-items-center">
                <label className="d-flex align-items-center justify-content-between nationality-row">
                  <input type="radio" name="hours" value="up-to-6" />
                  <span className="nationality-text1">Up to 6 hrs</span>
                  <span className="nationality-price">20 JOD</span>
                </label>
              </li>
              <li className="row align-items-center">
                <label className="d-flex align-items-center justify-content-between nationality-row">
                  <input type="radio" name="hours" value="6-9" />
                  <span className="nationality-text1">6 - 9 hrs</span>
                  <span className="nationality-price">25 JOD</span>
                </label>
              </li>
              <li className="row align-items-center">
                <label className="d-flex align-items-center justify-content-between nationality-row">
                  <input type="radio" name="hours" value="9-12" />
                  <span className="nationality-text1">9 - 12 hrs</span>
                  <span className="nationality-price">30 JOD</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nationality
