// import React from 'react'
// import user from '../../assets/profile.png'
// // import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import '../css/Candidates.css'

// const Candidates = () => {
//   return (
//     <section className="candidate-section">
//     <div className="container candidate-container">
//       <div className="candidate-content">
//         <div className='row content-head'>
//             <p className='col-8 head-para'>Sunday - 25.Sep.2023 - 10 Waiters</p>
//             <button className='col-2 mx-3'>Autoselect</button>
//             <div className='col-2 SendBtn'>
//             <button>Send</button>
//             </div>
//         </div>
//         <div className='row para-2'>
//         <p>50 applications</p>
//         </div>
        
        
//         <div className="row  candidate-form">
//         <label className="row candidate-label">
//         <img
//           className="col-1 img-fluid profile-img"
//           src={user} 
//           alt="profile"
//         />
//         <span className="col-3 candidate-span">Mohammad Ahmad</span>
//         <div className="col-5 icon-star">
//           <div className="stars">
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star"></span>
//             <span className="star"></span>
//           </div>
//         </div>
//         <div className="col-2 heart-container">
//           <span className="heart-icon">&#10084;</span>
//         </div>
//         <input type="checkbox" className="col-1 candidate-checkbox" />
//       </label>
//         </div>
//         <div className="row  candidate-form">
//         <label className="row candidate-label">
//         <img
//           className="col-1 img-fluid profile-img"
//           src={user} 
//           alt="profile"
//         />
//         <span className="col-3 candidate-span">Mohammad Ahmad</span>
//         <div className="col-5 icon-star">
//           <div className="stars">
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star"></span>
//             <span className="star"></span>
//           </div>
//         </div>
//         <div className="col-2 heart-container">
//           <span className="heart-icon">&#10084;</span>
//         </div>
//         <input type="checkbox" className="col-1 candidate-checkbox" />
//       </label>
//         </div>
//         <div className="row  candidate-form">
//         <label className="row candidate-label">
//         <img
//           className="col-1 img-fluid profile-img"
//           src={user} 
//           alt="profile"
//         />
//         <span className="col-3 candidate-span">Mohammad Ahmad</span>
//         <div className="col-5 icon-star">
//           <div className="stars">
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star"></span>
//             <span className="star"></span>
//           </div>
//         </div>
//         <div className="col-2 heart-container">
//           <span className="heart-icon">&#10084;</span>
//         </div>
//         <input type="checkbox" className="col-1 candidate-checkbox" />
//       </label>
//         </div>
//         <div className="row  candidate-form">
//         <label className="row candidate-label">
//         <img
//           className="col-1 img-fluid profile-img"
//           src={user} 
//           alt="profile"
//         />
//         <span className="col-3 candidate-span">Mohammad Ahmad</span>
//         <div className="col-5 icon-star">
//           <div className="stars">
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star"></span>
//             <span className="star"></span>
//           </div>
//         </div>
//         <div className="col-2 heart-container">
//           <span className="heart-icon">&#10084;</span>
//         </div>
//         <input type="checkbox" className="col-1 candidate-checkbox" />
//       </label>
//         </div>
//         <div className="row  candidate-form">
//         <label className="row candidate-label">
//         <img
//           className="col-1 img-fluid profile-img"
//           src={user} 
//           alt="profile"
//         />
//         <span className="col-3 candidate-span">Mohammad Ahmad</span>
//         <div className="col-5 icon-star">
//           <div className="stars">
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star"></span>
//             <span className="star"></span>
//           </div>
//         </div>
//         <div className="col-2 heart-container">
//           <span className="heart-icon">&#10084;</span>
//         </div>
//         <input type="checkbox" className="col-1 candidate-checkbox" />
//       </label>
//         </div>
//         <div className="row  candidate-form">
//         <label className="row candidate-label">
//         <img
//           className="col-1 img-fluid profile-img"
//           src={user} 
//           alt="profile"
//         />
//         <span className="col-3 candidate-span">Mohammad Ahmad</span>
//         <div className="col-5 icon-star">
//           <div className="stars">
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star filled"></span>
//             <span className="star"></span>
//             <span className="star"></span>
//           </div>
//         </div>
//         <div className="col-2 heart-container">
//           <span className="heart-icon">&#10084;</span>
//         </div>
//         <input type="checkbox" className="col-1 candidate-checkbox" />
//       </label>
//         </div>
       



//         <div className="row text-center note">
//           <p className="mb-1">Notes! </p>
//           <li  className="mb-1">
// Daily orders will be auto selected 48 hours before the order time</li>
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default Candidates

import React from 'react'
import user from '../../assets/profile.png'
import '../css/Candidates.css'

const Candidates = () => {
  return (
    <section className="candidate-section">
      <div className="container candidate-container">
        <div className="candidate-content">
          <div className='row content-head'>
  <p className='col-12 col-md-7 head-para'>Sunday - 25.Sep.2023 - 10 Waiters</p>
  <button className='col-12 col-md-2 autoselect '>Autoselect</button>
  <div className='col-12 col-md-2 SendBtn'>
    <button>Send</button>
  </div>
</div>

<div className='row para-2'>
  <p className='col-12 text-left'>50 applications</p>
</div>


          {[...Array(6)].map((_, index) => (
            <div className="row candidate-form" key={index}>
              <label className="row candidate-label">

                <div className="col-2 col-md-1">
                  <img
                    className="img-fluid profile-img"
                    src={user}
                    alt="profile"
                  />
                </div>

                <div className="col-7 col-md-3 d-flex align-items-center">
                  <span className="candidate-span">Mohammad Ahmad</span>
                </div>

                <div className="col-6 col-md-5 icon-star d-flex justify-content-center align-items-center">
                  <div className="stars">
                    <span className="star filled"></span>
                    <span className="star filled"></span>
                    <span className="star filled"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                  </div>
                </div>

                <div className="col-3 col-md-2 heart-container d-flex justify-content-center align-items-center">
                  <span className="heart-icon">&#10084;</span>
                </div>

                <div className="col-2 col-md-1 d-flex justify-content-center align-items-center">
                  <input type="checkbox" className="candidate-checkbox" />
                </div>
              </label>
            </div>
          ))}

          <div className="row text-center note1">
            <p className="mb-1">Notes! </p>
            <li className="mb-1">
              Daily orders will be auto selected 48 hours before the order time
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Candidates

