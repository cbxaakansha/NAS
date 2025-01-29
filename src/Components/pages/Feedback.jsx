import React from "react";
import "../css/Feedback.css";
import user from "../../assets/profile.png";
import alert from "../../assets/alert.png";
import comment from "../../assets/Comment.png";
import heart from "../../assets/Heart.png";

const Feedback = () => {
  return (
    <section className="feedback-section">
      <div className="container feedback-container">
        <div className="feedback-content">
          <div className="row feedback-head">
            <p className="col-12 col-md-6 head-para-feedback">
              Sunday - 25.Sep.2023 - 10 Waiters
            </p>
            <div className="col-4 col-md-3 icon-star">
              <div className="stars">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star"></span>
                <span className="star"></span>
              </div>
            </div>
            <div className="col-3 col-md-1 comment-section">
              <img
                className="img-fluid comment-img"
                src={comment}
                alt="comment"
              />
              <span className="comment-text1">Comment</span>
            </div>
            <div className="col-4 col-md-2 SendBtn">
              <button>Send</button>
            </div>
          </div>

          {[...Array(6)].map((_, index) => (
        <div className="row feedback-form" key={index}>
  <label className="row feedback-label">
    <div className="col-2 col-md-2 col-lg-1">
      <img
        className="img-fluid profile-img"
        src={user}
        alt="profile"
      />
    </div>
    <div className="col-9 col-md-8 col-lg-4 d-flex align-items-center">
      <span className="feedback-span">Mohammad Ahmad</span>
    </div>

    <div className="col-2 col-md-2 col-lg-1 d-flex justify-content-center align-items-center comment-section">
      <img
        className="img-fluid alert-img"
        src={alert}
        alt="alert"
      />
      <span className="comment-text">Block</span>
    </div>

    <div className="col-4 col-md-3 col-lg-3 d-flex justify-content-center align-items-center">
      <div className="stars">
        <span className="star filled"></span>
        <span className="star filled"></span>
        <span className="star filled"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>
    </div>

    <div className="col-2 col-md-2 col-lg-1 d-flex justify-content-center align-items-center comment-section">
      <img
        className="img-fluid comment-img"
        src={comment}
        alt="comment"
      />
      <span className="comment-text">Comment</span>
    </div>

    <div className="col-2 col-md-1 col-lg-1 d-flex justify-content-center align-items-center">
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

export default Feedback;
