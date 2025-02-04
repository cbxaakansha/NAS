import React, { useEffect, useState } from "react";
import "../css/Registration1.css";
import { useNavigate } from "react-router-dom";
import locationImg from "../../assets/location.png";

const Profile = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("/countries.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch countries: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setError("Failed to load countries. Please try again later.");
      });
  }, []);

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };
 

  const [formData, setFormData] = useState({
    accountType: "Business",
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    locationLink: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <section className="registration-section py-4">
      <div className="container registration-container">
        <h2 className="text-left">My Profile</h2>
        <div className="registration-form">
                
                <form className="row g-3" >
                  <div className="col-12">
                    <label className="form-label">Account type <span className="text-danger">*</span></label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                      <label className="form-check-label">Individual</label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="accountType"
                          value="Individual"
                          checked
                        />
                        
                      </div>
                      <div className="form-check">
                      <label className="form-check-label">Business</label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="accountType"
                          value="Business"
                          checked
                        />
                        
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
        
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
        
                  <div className="col-md-4">
                    <label className="form-label">Country Code</label>
                    <select className="form-select" value={selectedCountryCode} onChange={handleCountryCodeChange}>
                      {countries.map((country, index) => (
                        <option key={index} value={country.dial_code}>
                          {`+${country.dial_code}`} ({country.name})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">Phone</label>
                    <input
                      className="form-control"
                      type="tel"
                      name="phone"
                      placeholder="7X XX XX X XX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
        
                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      placeholder="Apartment, Street, City"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
        
                  <div className="col-12 position-relative">
                    <label className="form-label">Location</label>
                    <input
                      className="form-control"
                      type="url"
                      name="locationLink"
                      placeholder="Paste link here or choose on map"
                      value={formData.locationLink}
                      onChange={handleChange}
                    />
                    <img
                      className="Location-img"
                      src={locationImg}
                      alt="Location"
                    />
                  </div>
        
                  <div className="col-12 text-end">
                    <button className="SubmitBtn" type="submit">Update</button>
                  </div>
                </form>
              </div>
      </div>
    </section>
  );
};

export default Profile;
