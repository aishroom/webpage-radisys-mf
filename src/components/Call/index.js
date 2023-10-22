// import React, { useEffect } from 'react';

// const Call = () => {
//   useEffect(() => {
//     if (window.engageDigitalClickToCallConfig) {      
//       // eslint-disable-next-line no-undef
//       initializeEngageDigitalClickToCall(window.engageDigitalClickToCallConfig);
//       document.getElementById(window.engageClickToCallConfig.showImage).style.visibility = 'visible';
//       document.getElementById(window.engageClickToCallConfig.showImage).style.display = 'block';
//     }
    
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-9" style={{ textAlign: 'center', backgroundColor: 'rgb(209, 224, 200)' }}>
//           <p>
//             <div style={{ color: '#171618' }}>
//               <strong>Click-to-Call Demo Application (Programmable Audio)</strong>
//             </div>
//           </p>
//         </div>
//         <div className="col" style={{ backgroundColor: 'rgb(209, 224, 200)' }}>
//           <div className="callButton">
//             <button id="engage-digital-click-to-call-btn"></button>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-9">
//           <br />
//           <div style={{ color: 'blue', fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
//             Guide to plug-in Click-to-Call feature to your website
//           </div>
//           <br />
//           {/* <iframe src="app-guide-content.html" className="guide-content"></iframe> */}
//         </div>

//         <div className="inneraudio">
//           <div className="remoteAudio">
//             <div className="logoIcon">
//               <img
//                 id="initial"
//                 className="logo"
//                 style={{ visibility: 'hidden', display: 'none', justifyContent: 'center' }}
//                 src="mobile-phone.png"
//                 alt="Call Logo"
//                 width="100"
//                 height="100"
//               />
//               <img
//                 id="Ringing"
//                 style={{ visibility: 'hidden', display: 'none' }}
//                 src="call.png"
//                 alt="Call Ringing"
//                 width="100"
//                 height="100"
//               />
//               <img
//                 id="Connected"
//                 style={{ visibility: 'hidden', display: 'none' }}
//                 src="phone-call.png"
//                 alt="Call Connected"
//                 width="100"
//                 height="80"
//               />
//             </div>
//             <audio id="engage-digital-remote-audio" autoPlay controls></audio>
//           </div>
//         </div>
//         <div className="alert" id="engage-digital-alert"></div>
//       </div>
//     </div>
//   );
// };

// export default Call;
