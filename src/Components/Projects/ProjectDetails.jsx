// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { galleryItems } from './Gallery';
// import './Demoprojectdetails.css';
// import NavBar from '../Navbar/Navbar';
// import kayal1 from './Detailprojectimages/kayal1.JPG';
// import kayal2 from './Detailprojectimages/kayal2.JPG';
// import kayal3 from './Detailprojectimages/kayal3.JPG'
// import kayal4 from './Detailprojectimages/kayal4.JPG';
// import kayal5 from './Detailprojectimages/kayal5.JPG';
// import kayal6 from './Detailprojectimages/kayal6.JPG';
// import plus from './Detailprojectimages/plus.png';

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = galleryItems.find(item => item.id === parseInt(id, 10));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div>
//       <NavBar className="project-custom-navbar" />
//       <div className="detail-page">
//       <img className='kayal1' src={kayal1} alt="" /> 
//       <img className='kayal2' src={kayal2} alt="" />
        
//       </div>
//       <div className="second-container-detailpage">
        
//       </div>
//       <div className="detail-page-contain3 container-fluid">
        
//         <img className='kayal4' src={kayal4} alt="" />
//         <img className='kayal5' src={kayal5} alt="" />
//         <img className='kayal6' src={kayal6} alt="" />
//       </div>
//       <div className="container-fluid info-contain mt-1">
//         <div className="row justify-content-center">
//           <div className="col-10 col-sm-8 col-md-4 detailproject-col">
//             <h2>KAYAL</h2>
//             <h6>TYPOLOGY - EVENT SPACE</h6>
//             <h6>YEAR - 2020</h6>
//             <h6>AREA - 5 acres</h6>
//             <p>Kayal is an outdoor event space designed and brought to life by Vishwakarma Design Studio. 
//                An unique event space that blends the boundaries of outdoor and indoor spaces with curated 
//                elements and personalized handcrafted designs, Kayal is one of a kind.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="otherprojects-contain container-fluid">
//         <div className='other-head'>
//           <img className='plus-img' src={plus} alt="" /> other projects
//         </div>
//         <div className="row otherproject-row justify-content-start mt-2">
          
//             <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
//               <img src={kayal2} alt="" srcset="" />
//             </div>
          
//             <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
//               <img src={kayal2} alt="" srcset="" />
//             </div>
          
//             <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
//               <img src={kayal3} alt="" srcset="" />
//             </div>
       
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;






// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { galleryItems } from './Gallery';
// import './ProjectDetails.css';
// import NavBar from '../Navbar/Navbar';
// import plus from './Detailprojectimages/plus.png';


// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = galleryItems.find(item => item.id === parseInt(id, 10));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   const otherProjects = galleryItems.filter(item => item.id !== parseInt(id, 10));

//   return (
//     <div>
//       <NavBar className="custom-navbar" />
//       <div className="detail-page">
//         <img className='project-img' src={project.img} alt={project.category} />
//       </div>
//       <div className="second-container-detailpage"></div>
//       <div className="detail-page-contain3 mt-5">

//       </div>
//       <div className="container-fluid info-contain">
//         <div className="row justify-content-center">
//           <div className="col-4 detailproject-col">
//             <h2>{project.category}</h2>
//             <p>Project ID - {project.id}</p>
//             <p>Description for the project can go here...</p>
//           </div>
//         </div>
//       </div>
//       <div className="otherprojects-contain container-fluid">
//         <div className='other-head'>
//           <img className='plus-img' src={plus} alt="" /> other projects
//         </div>
//         <div className="row otherproject-row justify-content-start mt-2">
//           {otherProjects.slice(0, 3).map(otherProject => (
//             <div key={otherProject.id} className="col-4 otherprojects">
//               <Link to={`/project/${otherProject.id}`}>
//                 <img src={otherProject.img} alt={otherProject.category} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

