import React from 'react'
import '../css/Delivered.css'
import { useNavigate } from 'react-router-dom'

const Delivered = () => {
    const navigate = useNavigate();

    const handleFeedback= ()=>{
        navigate("/feedback")
    }
  return (
    <section className="delivered-section">
    <div className="container delivered-container">
      <div className="delivered-content">
        <div className="row delivered-form1" >
        <div className="row delivered-form">
                        <div className='col-12  col-md-4  date-para'>
                            <p>Sunday - 25.Sep.2023.</p>
                        </div>
                        
                        <div className="col-12  col-md-3  mid-section">
                          <p>10 waiters</p>
                        </div>
                        <div className='d-flex justify-content-between  col-12  col-md-5 btn-delivered  '>

                        <div className="">
                            <button className="receiptBtn">Receipt</button>
                        </div>
                        <div className=" ">
                            <button className="feedbackBtn"  onClick={handleFeedback}>Feedback</button>
                        </div>
                        </div>
                       
            </div>
            <div className="row delivered-form">
                        <div className='col-12  col-md-4  date-para'>
                            <p>Sunday - 25.Sep.2023.</p>
                        </div>
                        
                        <div className="col-12  col-md-3  mid-section">
                          <p>10 waiters</p>
                        </div>
                        <div className='d-flex justify-content-between  col-12  col-md-5 btn-delivered  '>

                        <div className="">
                            <button className="receiptBtn">Receipt</button>
                        </div>
                        <div className=" ">
                            <button className="feedbackBtn"  onClick={handleFeedback}>Feedback</button>
                        </div>
                        </div>
                       
            </div>
            <div className="row delivered-form">
                        <div className='col-12  col-md-4  date-para'>
                            <p>Sunday - 25.Sep.2023.</p>
                        </div>
                        
                        <div className="col-12  col-md-3  mid-section">
                          <p>10 waiters</p>
                        </div>
                        <div className='d-flex justify-content-between  col-12  col-md-5 btn-delivered  '>

                        <div className="">
                            <button className="receiptBtn">Receipt</button>
                        </div>
                        <div className=" ">
                            <button className="feedbackBtn"  onClick={handleFeedback}>Feedback</button>
                        </div>
                        </div>
                       
            </div>
            <div className="row delivered-form">
                        <div className='col-12  col-md-4  date-para'>
                            <p>Sunday - 25.Sep.2023.</p>
                        </div>
                        
                        <div className="col-12  col-md-3  mid-section">
                          <p>10 waiters</p>
                        </div>
                        <div className='d-flex justify-content-between  col-12  col-md-5 btn-delivered  '>

                        <div className="">
                            <button className="receiptBtn">Receipt</button>
                        </div>
                        <div className=" ">
                            <button className="feedbackBtn"  onClick={handleFeedback}>Feedback</button>
                        </div>
                        </div>
                       
            </div>
            
                       
  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Delivered
