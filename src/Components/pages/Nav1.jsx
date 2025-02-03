
// // import React, { useState, useEffect, useRef } from 'react';
// // import '../css/Nav1.css';
// // import logo from '../../assets/logo.png';
// // import notification from "../../assets/Notification.png";
// // import hamburger from "../../assets/Header.png";

// // const Nav1 = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const menuRef = useRef(null);

// //   const toggleMenu = () => {
// //     setIsMenuOpen((prevState) => !prevState);
// //   };

// //   const closeMenu = () => {
// //     setIsMenuOpen(false);
// //   };


// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         closeMenu();
// //       }
// //     };


// //     document.addEventListener('mousedown', handleClickOutside);

// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <section className="nav1-section">
// //       <div className="container nav1-container position-relative">
// //         <div className="row navbar1-row">
// //           <div className="col-2 col-md-1 logo1 text-center">
// //             <img src={logo} alt="logo-img" className="img-fluid" />
// //           </div>
// //           <div className="col-10 col-md-3 lang-icon1 text-right position-relative">
// //             <img src={notification} alt="notification-icon" className="img-fluid" />
// //             <img
// //               src={hamburger}
// //               alt="hamburger-icon"
// //               className="img-fluid"
// //               onClick={toggleMenu}
// //               style={{ cursor: 'pointer' }}
// //             />
// //             {isMenuOpen && (
// //               <div className="menu-container1" ref={menuRef}>
// //                 <div className="Menu-items">
// //                   <li>
// //                     <h2>My First Last</h2>
// //                   </li>
// //                   <li>
// //                     <button>Profile</button>
// //                   </li>
// //                   <li>
// //                     <button>Change Password</button>
// //                   </li>
// //                   <li>
// //                     <button>Payment Method</button>
// //                   </li>
// //                   <li>
// //                     <button>Change Language</button>
// //                   </li>
// //                   <li>
// //                     <button>Contact Us</button>
// //                   </li>
// //                   <li>
// //                     <button>Log out</button>
// //                   </li>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Nav1;
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import '../css/Nav1.css';
// import { Link } from "react-router-dom";
// import logo from '../../assets/logo.png';
// import notification from "../../assets/Notification.png";
// import hamburger from "../../assets/Header.png";

// const Nav1 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const navigate = useNavigate(); // Initialize navigate function

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         closeMenu();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <section className="nav1-section">
//       <div className="container nav1-container position-relative">
//         <div className="row navbar1-row">
//           <div className="col-2 col-md-1 logo1 text-center">
//           <Link to="/">
//               <img src={logo} alt="logo-img" className="img-fluid" />
//             </Link>
//           </div>
//           <div className="col-10 col-md-3 lang-icon1 text-right position-relative">
//             <img src={notification} alt="notification-icon" className="img-fluid" />
//             <img
//               src={hamburger}
//               alt="hamburger-icon"
//               className="img-fluid"
//               onClick={toggleMenu}
//               style={{ cursor: 'pointer' }}
//             />
//             {isMenuOpen && (
//               <div className="menu-container1" ref={menuRef}>
//                 <div className="Menu-items">
//                   <li>
//                     <h2>My First Last</h2>
//                   </li>
//                   <li>
//                     <button onClick={() => navigate('/profile')}>Profile</button> {/* Navigate without refresh */}
//                   </li>
//                   <li>
//                     <button>Change Password</button>
//                   </li>
//                   <li>
//                     <button>Payment Method</button>
//                   </li>
//                   <li>
//                     <button>Change Language</button>
//                   </li>
//                   <li>
//                     <button>Contact Us</button>
//                   </li>
//                   <li>
//                     <button>Log out</button>
//                   </li>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Nav1;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Nav1.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import notification from "../../assets/Notification.png";
import hamburger from "../../assets/Header.png";

const Nav1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="nav1-section">
      <div className="container nav1-container position-relative">
        <div className="row navbar1-row">
          <div className="col-2 col-md-1 logo1 text-center">
            <Link to="/">
              <img src={logo} alt="logo-img" className="img-fluid" />
            </Link>
          </div>
          <div className="col-10 col-md-3 lang-icon1 text-right position-relative">
            <img src={notification} alt="notification-icon" className="img-fluid" />
            <img
              src={hamburger}
              alt="hamburger-icon"
              className="img-fluid"
              onClick={toggleMenu}
              style={{ cursor: 'pointer' }}
            />
            {isMenuOpen && (
              <div className="menu-container1" ref={menuRef}>
                <div className="Menu-items">
                  <li>
                    <h2>My First Last</h2>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/profile');
                        closeMenu();
                      }}
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/changePassword');
                        closeMenu();
                      }}
                    >
                      Change Password
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/payment');
                        closeMenu();
                      }}
                    >
                      Payment Method
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/changeLanguage');
                        closeMenu();
                      }}
                    >
                      Change Language
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate('/contact');
                        closeMenu();
                      }}
                    >
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        // Add your logic here
                        closeMenu();
                      }}
                    >
                      Log out
                    </button>
                  </li>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav1;
