// import React, { useState } from "react";
// import Workers from "./Workers";
// import Quantity from "./Quantity";
// import Nationality from "./Nationality";
// import Order from "./Order";
// import Request from "./Request";
// import Payment from "./Payment";
// import Thanks from "./Thanks";

// import "../css/Navigation.css";

// const Navigation1 = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   // List of all pages/components
//   const pages = [
//     <Workers />,
//     <Quantity />,
//     <Nationality />,
//     <Order />,
//     <Request />,
//     <Payment />,
//     <Thanks />,
//   ];

//   // Handlers for navigation
//   const handleNext = () => {
//     if (currentPage < pages.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <section className="navigation-section">
//       <div
//         className={`container navigation-container ${
//           currentPage === pages.length - 1 ? "last-page" : ""
//         }`}
//       >
//         <div className="navigation-content">
//           {pages[currentPage]}
//           {currentPage < pages.length - 1 && (
//             <>
//               <div className="navigation-dots">
//                 {pages.map((_, index) => (
//                   <span
//                     key={index}
//                     className={`dot ${index === currentPage ? "active" : ""}`}
//                     onClick={() => setCurrentPage(index)}
//                   ></span>
//                 ))}
//               </div>
//               <div className="navigation-btn">
//                 <button
//                   className="navBtn"
//                   type="button"
//                   onClick={handlePrevious}
//                   disabled={currentPage === 0}
//                 >
//                   Back
//                 </button>
//                 <button
//                   className="navBtn"
//                   type="button"
//                   onClick={handleNext}
//                   disabled={currentPage === pages.length - 1}
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navigation1;
import React, { useState } from "react";
import Workers from "./Workers";
import Quantity from "./Quantity";
import Nationality from "./Nationality";
import Order from "./Order";
import Request from "./Request";
import Payment from "./Payment";
import Thanks from "./Thanks";

import "../css/Navigation.css";

const Navigation1 = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // List of all pages/components
  const pages = [
    <Workers />,
    <Quantity />,
    <Nationality />,
    <Order />,
    <Request />,
    <Payment />,
    <Thanks />,
  ];

  // Handlers for navigation
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="navigation-section">
      {currentPage < pages.length - 1 && (
        <div
          className={`container navigation-container ${
            currentPage === pages.length - 1 ? "last-page" : ""
          }`}
        >
          <div className="navigation-content">
            {pages[currentPage]}
            <div className="navigation-dots">
              {pages.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentPage ? "active" : ""}`}
                  onClick={() => setCurrentPage(index)}
                ></span>
              ))}
            </div>
            <div className="navigation-btn">
              <button
                className="navBtn"
                type="button"
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                Back
              </button>
              <button
                className="navBtn"
                type="button"
                onClick={handleNext}
                disabled={currentPage === pages.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {currentPage === pages.length - 1 && <div>{pages[currentPage]}</div>}
    </section>
  );
};

export default Navigation1;
