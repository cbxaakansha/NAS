import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container contact-container">
      <div className="Card2-container">
        <div className="row ">



            <form className="contact-form ">
              <p>Contact Us </p>
                <div className="row">
              <div className="form-group2 mb-3 col-6">
                <label htmlFor="firstName" className="custom-label">First Name</label>
                <input
                  type="text"
                  className="form-control "
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group2 mb-3 col-6">
                <label htmlFor="lastName" className="custom-label">Last Name</label>
                <input
                  type="text"
                  className="form-control "
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              </div>
              <div className="form-group2 mb-3">
                <label htmlFor="email" className="custom-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group2 mb-3">
                <label htmlFor="message" className="custom-label">How Can We Help You?</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <div className="buttons">
              <button type="submit" className="btn  btn-block mb-3 ">
                SUBMIT
              </button>
              </div>
            </form>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
