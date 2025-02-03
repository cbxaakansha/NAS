// import React from 'react'
// import logo from "../../assets/logo.png";
// import { useNavigate } from "react-router-dom";
// import "../css/Change.css";

// const ChangePassword1 = () => {
//   return (
//     <section className="change-section">
//           <div className="container change-container">
//             <div className="Card1-container">
//               <div className="row">
//                 <div className="change-logo mb-3 text-center">
//                   <img src={logo} alt="logo-img" className="img-fluid" />
//                 </div>
//                 <h2 className="change-head text-center">Change your Password</h2>
//                 <form>
//                   <div className="form-group">
//                     <label className="change-label">Enter Old Password</label>
//                     <input type="password" id="pwd" placeholder="Old Password" />
//                   </div>
//                   <div className="form-group">
//                     <label className="change-label">Enter New Password</label>
//                     <input type="password" id="pwd" placeholder="New Password" />
//                   </div>
//                   <div className="form-group">
                   
//                     <input type="password" id="pwd" placeholder="Confirm new Password" />
//                   </div>
    
//                   <div className="buttons">
//                   <button type="submit" className="signup-button"  >
//                     Set Password
//                     </button>
                    
//                   </div>
    
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//   )
// }

// export default ChangePassword1
import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../css/Change.css";

const ChangePassword1 = () => {
  const [showPopup, setShowPopup] = useState(false);  
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    console.log("showPopup state before:", showPopup);
    setShowPopup(true); 
    console.log("showPopup state after:", showPopup);

    setTimeout(() => setShowPopup(false), 15000);
  };

  const handleCloseModal = () => {
    setShowPopup(false);  
  };

  console.log("Rendering modal. showPopup:", showPopup);

  return (
    <section className="change-section">
      <div className="container change-container">
        <div className="Card1-container">
          <div className="row">
            <div className="change-logo mb-3 text-center">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </div>
            <h2 className="change-head text-center">Change your Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="change-label">Enter Old Password</label>
                <input
                  type="password"
                  id="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  placeholder="Old Password"
                />
              </div>
              <div className="form-group">
                <label className="change-label">Enter New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="New Password"
                />
              </div>
              <div className="form-group">
                <label className="change-label">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm New Password"
                />
              </div>

              <div className="buttons">
                <button type="submit" className="signup-button">
                  Set Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-header">Password Updated</h3>
            <p>Your password has been successfully changed.</p>
            <button className="modal-button" onClick={handleCloseModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ChangePassword1;
