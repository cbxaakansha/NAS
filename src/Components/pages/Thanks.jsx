import React from "react";
import "../css/Thanks.css";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();
  
     const handlePending=()=>{
      navigate("/pendingOrders");
     }
     const handleOrder = () => {
       navigate("/dashboard");
     };
  return (
    <section className="thanks-section">
      <div className="container thanks-container">
        <div className="row ">
          <div className="card-content1">
            <p>
              Thank you for your unstoppable support You may start choosing
              workers from <span className="star-span2">“Pending Orders”</span> button
            </p>
            <div className="Order-btn-box">
              <button className="OrderBtn " onClick={handleOrder}>Create a New Order</button>
              <button className="OrderBtn" onClick={handlePending}><span className="star-span1">Pending Orders</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
