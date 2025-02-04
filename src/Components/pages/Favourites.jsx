import React from "react";
import "../css/Favourites.css";
import user from "../../assets/profile.png";
import heart from "../../assets/Heart.png";

const Favourites = () => {
  return (
    <section className="favourites-section">
      <div className="container favourites-container">
        <div className="favourites-content">
          {[...Array(6)].map((_, index) => (
            <div className="row favourites-form" key={index}>
              <label className="row favourites-label">
                <div className="col-2 col-md-1">
                  <img
                    className=" profile-img"
                    src={user}
                    alt="profile"
                  />
                </div>
                <div className="col-9 col-md-4 d-flex align-items-center">
                  <span className="favourites-span">Mohammad Ahmad</span>
                </div>

                <div className="col-5 col-md-3 icon-star d-flex justify-content-center align-items-center">
                  <div className="stars">
                    <span className="star filled"></span>
                    <span className="star filled"></span>
                    <span className="star filled"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                  </div>
                </div>
                <div className="col-3 col-md-2 d-flex  align-items-center">
                  <button className="removeBtn">Remove</button>
                </div>
                <div className="col-3 col-md-1 d-flex justify-content-center align-items-center">
                  <img
                    className="img-fluid heart-img"
                    src={heart}
                    alt="heart"
                  />
                </div>

              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favourites;

