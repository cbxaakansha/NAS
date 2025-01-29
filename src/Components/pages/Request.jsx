import React from 'react'
import "../css/Request.css";

const Request = () => {
  return (
    <section className="request-section">
      <div className="container request-container">
        <h2>
          Any special request?<span className='star-span'>(optional)</span>{" "}
        </h2>
        <div className="input-text1 mb-5 mt-3 text-center">
          <input type="text" name="text" placeholder="type your request" />
        </div>

      </div>
    </section>
  );
}

export default Request
