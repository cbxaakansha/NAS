// import React from "react";
// import "../css/PendingOrders.css";
// import { Link } from 'react-router-dom';
// const PendingOrders = () => {
//   return (
//     <section className="pendingOrder-section">
//       <div className="container pendingOrder-container">
//         <div className="pendingOrder-content">
//           <div className="row  pending-form">
//             <label className="row  pending-label">
//               <input type="checkbox" className="col-1 Pending-checkbox" />
//               <span className="col-2 pending-span">Auto Select</span>
//               <div className="col-5 Mid-content">
//                 <p className="date text-center">Sunday - 25.Sep.2023</p>
//                 <div className="content-2 ">
//                   <p className="details">10 Waiters</p>
//                   <p className="applications">50 applications</p>
//                 </div>
//               </div>
//               <button className="col-1 Delete-btn">Delete</button>
//               <div className="col-2 Btn-space">
//               <button className="candidateBtn"><Link to="/candidate"style={{ textDecoration: 'none', color: 'white' }}>Candidates</Link></button>
//               </div>
//             </label>
//           </div>
//           <div className="row  pending-form">
//             <label className="row  pending-label">
//               <input type="checkbox" className="col-1 Pending-checkbox" />
//               <span className="col-2 pending-span">Auto Select</span>
//               <div className="col-5 Mid-content">
//                 <p className="date text-center">Sunday - 25.Sep.2023</p>
//                 <div className="content-2 ">
//                   <p className="details">10 Waiters</p>
//                   <p className="applications">50 applications</p>
//                 </div>
//               </div>
//               <button className="col-1 Delete-btn">Delete</button>
//               <div className="col-2 Btn-space">
//               <button className=" candidateBtn"><Link to="/candidate"style={{ textDecoration: 'none', color: 'white' }}>Candidates</Link></button>
//               </div>
//             </label>
//           </div>
//           <div className="row  pending-form">
//             <label className="row  pending-label">
//               <input type="checkbox" className="col-1 Pending-checkbox" />
//               <span className="col-2 pending-span">Auto Select</span>
//               <div className="col-5 Mid-content">
//                 <p className="date text-center">Sunday - 25.Sep.2023</p>
//                 <div className="content-2 ">
//                   <p className="details">10 Waiters</p>
//                   <p className="applications">50 applications</p>
//                 </div>
//               </div>
//               <button className="col-1 Delete-btn">Delete</button>
//               <div className="col-2 Btn-space">
//               <button className=" candidateBtn"><Link to="/candidate"style={{ textDecoration: 'none', color: 'white' }}>Candidates</Link></button>
//               </div>
//             </label>
//           </div>
//           <div className="row  pending-form">
//             <label className="row  pending-label">
//               <input type="checkbox" className="col-1 Pending-checkbox" />
//               <span className="col-2 pending-span">Auto Select</span>
//               <div className="col-5 Mid-content">
//                 <p className="date text-center">Sunday - 25.Sep.2023</p>
//                 <div className="content-2 ">
//                   <p className="details">10 Waiters</p>
//                   <p className="applications">50 applications</p>
//                 </div>
//               </div>
//               <button className="col-1 Delete-btn">Delete</button>
//               <div className="col-2 Btn-space">
//               <button className=" candidateBtn"><Link to="/candidate"style={{ textDecoration: 'none', color: 'white' }}>Candidates</Link></button>
//               </div>
//             </label>
//           </div>

//           <div className="row text-center  note">
//             <p className="mb-1">Note! </p>
//             <li  className="mb-1">
//             Daily orders will be auto selected 48 hours before the order time</li>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PendingOrders;
import React from "react";
import "../css/PendingOrders.css";
import { Link } from 'react-router-dom';

const PendingOrders = () => {
  return (
    <section className="pendingOrder-section">
      <div className="container pendingOrder-container">
        <div className="pendingOrder-content">
          
          {[...Array(4)].map((_, index) => (
            <div className="row pending-form" key={index}>
              <label className="row pending-label">
                <input type="checkbox" className="col-2 col-md-1 Pending-checkbox" />
                <span className="col-10 col-md-2 pending-span">Auto Select</span>
                <div className="col-12 col-md-5 Mid-content">
                  <p className="date text-center">Sunday - 25.Sep.2023</p>
                  <div className="content-2 text-center text-md-start">
                    <p className="details">10 Waiters</p>
                    <p className="applications">50 applications</p>
                  </div>
                </div>
                <button className="col-5 col-md-1 Delete-btn">Delete</button>
                <div className="col-6 col-md-2 Btn-space">
                  <button className="candidateBtn">
                    <Link to="/candidate" style={{ textDecoration: 'none', color: 'white' }}>
                      Candidates
                    </Link>
                  </button>
                </div>
              </label>
            </div>
          ))}

          <div className="row text-center note">
            <p className="mb-1">Note! </p>
            <li className="mb-1">
              Daily orders will be auto selected 48 hours before the order time
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingOrders;
