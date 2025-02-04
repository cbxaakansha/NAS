import React from 'react';
import logo from "../../assets/logo1.jpg";
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <img className="img-fluid hero-img" src={logo} alt="logo" />
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-12">
            <h2 className="hero-subtitle">A New Day!! A New Job!!</h2>
            <h3 className="hero-title">Staffing Management Platform</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


