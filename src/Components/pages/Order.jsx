import React from 'react'
import "../css/Order.css";

const Order = () => {
  return (
    <section className="order-section">
      <div className="container order-container">
        <h2>Order date? <span className='star-span'>*</span> </h2>
        <div className="input-text text-center">
          <input type="date" name="date" />
        </div>
        <h2>Order time? <span className='star-span' >*</span></h2>
        <div className="input-text text-center">
          <input type="time" name="time" />
        </div>
      </div>
    </section>
  );
}

export default Order
