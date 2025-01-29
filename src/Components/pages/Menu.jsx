import React from "react";
import "../css/Menu.css";

const Menu = () => {
  return (
    <section>
      <div className="container  menu-container ">
        <div className="row">
        <div className="col-4  btn-container3   ">
          <div className=" mb-5 dashBtn1">
            <div className="btn   text-center py-4 dashboard-button1">
              Create a New Order
            </div>
          </div>

          <div className=" mb-5 dashBtn1">
            <div className="btn   text-center py-4 dashboard-button1">
              Pending Orders
            </div>
          </div>
        </div>
        <div className="col-4 btn-container4  ">
          <div className=" mb-5 dashBtn1">
            <div className="btn   text-center py-4 dashboard-button1">
              Delivered Orders
            </div>
          </div>

          <div className=" mb-5 dashBtn1">
            <div className="btn   text-center py-4 dashboard-button1">
              Favourites
            </div>
          </div>
        </div>
        <div className="col-3 menu-container1">
          <div className="Menu-items">
            <li>
              <h2>My First Last</h2>
            </li>
            <li>
              <button>Profile</button>
            </li>
            <li>
              <button>Change Password </button>
            </li>
            <li>
              <button>Pyment Method</button>
            </li>
            <li>
              <button>Change Language</button>
            </li>
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button>Log out</button>
            </li>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
