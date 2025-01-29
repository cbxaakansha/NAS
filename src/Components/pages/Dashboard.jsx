import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Dashboard.css'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
   const navigate = useNavigate();

   const handlePending=()=>{
    navigate("/pendingOrders");
   }
   const handleFavourites=()=>{
    navigate("/favourites");
   }
   const handleDelivered=()=>{
    navigate("/delivered");
   }
   const handleNavigation = () => {
     navigate("/navigation");
   };
    return (
      <section className="section-container">
        <div className="container dashboard-container ">
          <div className="row btn-container  ">
            <div className="col-md-6 mb-5 dashBtn">
              <button
                className="btn   text-center py-4 dashboard-button"
                onClick={handleNavigation}
              >
                Create a New Order
              </button>
            </div>

            <div className="col-md-6 mb-5 dashBtn">
              <button
                className="btn   text-center py-4 dashboard-button"
                onClick={handlePending}
              >
                Pending Orders
              </button>
            </div>
          </div>
          <div className="row btn-container1  ">
            <div className="col-md-6 mb-5 dashBtn">
              <button className="btn   text-center py-4 dashboard-button" 
              onClick={handleDelivered}>
                Delivered Orders
              </button>
            </div>

            <div className="col-md-6 mb-5 dashBtn">
              <button className="btn   text-center py-4 dashboard-button"
              onClick={handleFavourites}>
                Favourites
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Dashboard;