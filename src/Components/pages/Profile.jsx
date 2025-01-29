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
        <h2>My Profile</h2>
        <form className="registration-form" >
          <div className="row mb-3 form-1 align-items-center">
            <div className="col-12 col-md-4">
              <label>
                Account type <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12 col-md-8 d-flex">
              <div className="form-check ">
                <label className="form-check-label">Individual</label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountType"
                  value="Individual"
                  
                />
              </div>
              <div className="form-check mx-5">
                <label className="form-check-label">Business</label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountType"
                  value="Business"
                  
                />
              </div>
            </div>
          </div>

          <div className="row mb-3 form-1">
            <div className="col-12 col-md-4">
              <label>
                Name & Title <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex flex-wrap gap-2">
                <select
                  className="form-select "
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                >
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                </select>
                <label className="text w-15">First</label>
                <input
                  className="form-control1 "
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  
                />
                <label className="text w-15">Last</label>
                <input
                  className="form-control1 "
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  
                />
              </div>
            </div>
          </div>
          <div className="row mb-3 form-1">
            <div className="col-12 col-md-4">
              <label>
                Email <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12 col-md-8 d-flex gap-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="email@domain.com"
                value={formData.email}
                onChange={handleChange}
                
              />
              <label className="verify-text ">Verify</label>
              <input className="form-check-input" type="radio" />
            </div>
          </div>
          <div className="row mb-3 form-1">
            <div className="col-12 col-md-4">
              <label>
                Phone <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12 col-md-8 d-flex gap-3">
              <select
                className="form-select w-25"
                value={selectedCountryCode}
                onChange={handleCountryCodeChange}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country.dial_code}>
                    {`+${country.dial_code}`} ({country.name})
                  </option>
                ))}
              </select>
              <input
                className="form-control w-60"
                type="tel"
                name="phone"
                placeholder="7X XX XX X XX"
                value={formData.phone}
                onChange={handleChange}
                
              />
              <label className="verify-text ">Verify</label>
              <input className="form-check-input" type="radio" />
            </div>
          </div>
          <div className="row mb-3 form-1">
            <div className="col-12 col-md-4">
              <label>
                Address <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <input
                className="form-control"
                type="text"
                name="address"
                placeholder="Apartment, Street, City"
                value={formData.address}
                onChange={handleChange}
                
              />
            </div>
          </div>
          <div className="row mb-3 form-1">
            <div className="col-12 col-md-4">
              <label>
                Location <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12 col-md-8 position-relative">
              <input
                className="form-control"
                type="url"
                name="locationLink"
                placeholder="Paste link here or choose on map"
                value={formData.locationLink}
                onChange={handleChange}
                
              />
              <img
                className="position-absolute top-50 end-0 translate-middle-y pe-5"
                src={locationImg}
                alt="Location"
                style={{ height: "20px" }}
              />
            </div>
          </div>
          <div className=" Btn text-end">
            <button className="SubmitBtn" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
