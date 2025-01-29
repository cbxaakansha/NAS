import React from 'react'
import '../css/Payment.css'

const Payment = () => {
  return (
   <section className="payment-section">
         <div className="container payment-container">
           <h2>
           Payment Summary  <span className='star-span'>*</span>{" "}
           </h2>
           <div className="payment-form">
           <div className="payment-summary">
  <table className="summary-table">
    <thead>
      <tr>
        <th>Worker Type(s)</th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Waiter</td>
        <td>2</td>
        <td>40 JOD</td>
      </tr>
      <tr>
        <td>Housekeeping</td>
        <td>1</td>
        <td>20 JOD</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td className="tax-label" colSpan="2">Tax</td>
        <td>16% 9.6 JOD</td>
      </tr>
      <tr>
        <td className="total-label" colSpan="2">Total</td>
        <td>69.6 JOD</td>
      </tr>
    </tfoot>
  </table>
</div>

             <div className="paymnet-details">
                <h3>Payment Method <span className='star-span' >*</span></h3>
               <ul>
                 <li className="row">
                   <label className="payment-label d-flex align-items-center">
                   <input type="radio" name='payment' className='col-2 payment-radio' />
                     <span className="col-6 payment-text mx-2">Saved Card</span>
                     
                   </label>
                 </li>
                 <li className="row">
                   <label className="payment-label d-flex align-items-center">
                   <input type="radio" name='payment' className='col-2 payment-radio'/>
                     <span className="col-6 payment-text mx-2">Add new one</span>
                     
                   </label>
                 </li>
               </ul>
             </div>
             
           </div>
         </div>
       </section>
  )
}

export default Payment
