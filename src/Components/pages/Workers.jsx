import React from 'react'
import WaiterIcon from '../../assets/Info.png'; 
import '../css/Workers.css'

const Workers = () => {
  return (
    <section className="workers-section">
      <div className="container workers-container">
        <h2>
          Select Worker Type (s) <span className='star-span'>*</span>{" "}
        </h2>
        <div className="workers-form">
          <div className="worker-details">
            <ul>
              <li className="row">
                <label className="waiter-label d-flex align-items-center">
                  <input type="checkbox" className="col-2 waiter-checkbox" />
                  <span className="col-6 waiter-text mx-2">Waiter</span>
                  <img
                    src={WaiterIcon}
                    alt="Waiter Icon"
                    className="col-4 img-fluid icon-info"
                  />
                </label>
              </li>
              <li className="row">
                <label className="waiter-label d-flex align-items-center">
                  <input type="checkbox" className="col-2 waiter-checkbox" />
                  <span className="col-6 waiter-text mx-2">Housekeeping</span>
                  <img
                    src={WaiterIcon}
                    alt="Housekeeping Icon"
                    className="col-4 img-fluid icon-info"
                  />
                </label>
              </li>
              <li className="row">
                <label className="waiter-label d-flex align-items-center">
                  <input type="checkbox" className="col-2 waiter-checkbox" />
                  <span className="col-6 waiter-text mx-2">Steward</span>
                  <img
                    src={WaiterIcon}
                    alt="Steward Icon"
                    className="col-4 img-fluid icon-info"
                  />
                </label>
              </li>
              <li className="row">
                <label className="waiter-label d-flex align-items-center">
                  <input type="checkbox" className="col-2 waiter-checkbox" />
                  <span className="col-6 waiter-text mx-2">Back Bar</span>
                  <img
                    src={WaiterIcon}
                    alt="Back Bar Icon"
                    className="col-4 img-fluid icon-info"
                  />
                </label>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Workers;
