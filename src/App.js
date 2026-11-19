// // src/App.js
// import React from 'react';
// import Turyaproduct from './Components/Turya/Turyaproduct';
// import Detailproduct from './Components/Turya/Detailproduct';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import NavBar from './Components/Navbar/Navbar';
// import Services from './Components/Services/Services';
// import Turya from './Components/Turya/Turya';
// import Carousel from './Components/Carousel/Carousel'; // Assuming Carousel is your landing page
// // import About from './Components/About Us/Aboutus';
// // import Team from './Components/Team/Team';
// import Gallery from './Components/Projects/Gallery';
// import Projectmain from './Components/Projects/Projectmain';
// import ProjectDetails from './Components/Projects/ProjectDetails';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Carousel />} />
//         <Route path="/Services" element={<Services />} /> 
//         <Route path="/Turya" element={<Turya />} /> 
//         <Route path="/Turyaproduct" element={<Turyaproduct />} /> 
//         <Route path="/Detailproduct" element={<Detailproduct />} /> 
//         <Route path="/" exact element={<Gallery/>} />
//         <Route path="/Projectmain" element={<Projectmain />} /> 
//         <Route path="/project/:id" element={<ProjectDetails/>} />
        
//       </Routes>
//     </Router>
//     // <>
//     // <Projectmain/>
//     // </>
//   );
// };

// export default App;



// src/App.js

// import React from 'react';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Turyaproduct from './Components/Turya/Turyaproduct';
// import Detailproduct from './Components/Turya/Detailproduct';
import Services from './Components/Services/Services';
// import Turya from './Components/Turya/Turya';
import Carousel from './Components/Carousel/Carousel'; // Assuming Carousel is your landing page
import Gallery from './Components/Projects/Gallery';
import Projectmain from './Components/Projects/Projectmain';
import ProjectDetails from './Components/Projects/ProjectDetails';
import About from './Components/About Us/Aboutus';
import Contact from './Components/Contactus/Contact';
// import Seating from './Components/Turya/Turya-categorypages/Seating';
// import Bedroom from './Components/Turya/Turya-categorypages/Bedroom';
// import Mirrors from './Components/Turya/Turya-categorypages/Mirrors';
// import Dress from './Components/Turya/Turya-categorypages/Dress';
// import Sidetable from './Components/Turya/Turya-categorypages/Side-Table';
// import Centretable from './Components/Turya/Turya-categorypages/Centretable';
// import Dinningtable from './Components/Turya/Turya-categorypages/Dinningtable';
// import Pa from './Components/Turya/Turya-categorypages/Pa';
// import Drawer from './Components/Turya/Turya-categorypages/Drawer';
// import Accessories from './Components/Turya/Turya-categorypages/Accessories';
// import SeatingDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail1';
// import MirrorDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail1';
// import MirrorDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail2';
// import MirrorDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail3';
// import MirrorDetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail4';
// import MirrorDetail5 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail5';
// import MirrorDetail6 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail6';
// import MirrorDetail7 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail7';
// import MirrorDetail8 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail8';
// import MirrorDetail9 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail9';
// import MirrorDetail10 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail10';
// import MirrorDetail11 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail11';
// import MirrorDetail12 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail12';
// import SidetableDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/SidetableDetail1';
// import SidetableDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/SidetableDetail2';
// import SidetableDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/SidetableDetail3';
// import DinningtableDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/DinningtableDetail1';
// import DinningtableDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/DinningtableDetail2';
// import DinningtableDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/DinningtableDetail3';
// import DinningtableDetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/DinningtableDetail4';
// import PaDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail1';
// import PaDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail2';
// import PaDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail3';
// import PaDetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail4';
// import PaDetail5 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail5';
// import PaDetail6 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail6';
// import PaDetail7 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail7';
// import PaDetail8 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail8';
// import PaDetail9 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail9';
// import PaDetail10 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail10';
// import PaDetail11 from './Components/Turya/Turya-categorypages/Detailed-turya/PaDetail11';
// import AccessoriesDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail1';
// import AccessoriesDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail2';
// import AccessoriesDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail3';
// import AccessoriesDetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail4';
// import AccessoriesDetail5 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail5';
// import AccessoriesDetail6 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail6';
// import AccessoriesDetail7 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail7';
// import AccessoriesDetail8 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail8';
// import AccessoriesDetail9 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail9';
// import AccessoriesDetail10 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail10';
// import AccessoriesDetail11 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail11';
// import AccessoriesDetail12 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail12';
// import AccessoriesDetail13 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail13';
// import AccessoriesDetail14 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail14';
import Kayal from './Components/Projects/DetailedProjects/Kayal/Kayal';
import Springmountschool from './Components/Projects/DetailedProjects/Springschool/Springmountschool';
import Centuryappearls from './Components/Projects/DetailedProjects/CenturyAppearls/Centuryappearls';
import Ishaschool from './Components/Projects/DetailedProjects/Ishaschool/Ishaschool';
import Colorhouse from './Components/Projects/DetailedProjects/Colorhouse/Colorhouse';
import Lighthouse from './Components/Projects/DetailedProjects/Lighthouse/Lighthouse';
import Team from './Components/Team/Team';
import Donutsai from './Components/Projects/DetailedProjects/DonutSai/Donutsai';
import DonutThu from './Components/Projects/DetailedProjects/DonutThu/DonutThu';
import Elgi from './Components/Projects/DetailedProjects/Elgi/Elgi';
import Texmo from './Components/Projects/DetailedProjects/Texmo/Texmo';
import Houseofearthen from './Components/Projects/DetailedProjects/HouseofEarthen/Houseofearthen';
import Stackhouse from './Components/Projects/DetailedProjects/Stackhouse/Stackhouse';
import Yarnhouse from './Components/Projects/DetailedProjects/Yarn/Yarnhouse';
import Mootram from './Components/Projects/DetailedProjects/Mootram/Mootram';
import Nalanda from './Components/Projects/DetailedProjects/Nalanda/Nalanda';
import Sks from './Components/Projects/DetailedProjects/SKS/Sks';
import Villanunc from './Components/Projects/DetailedProjects/Villanunc/Villanunc';
import Summerhouse from './Components/Projects/DetailedProjects/Summerhouse/Summerhouse';
// import AccessoriesDetail15 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail15';
// import AccessoriesDetail16 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail16';
// import AccessoriesDetail17 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail17';
// import AccessoriesDetail18 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail18';
// import AccessoriesDetail19 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail19';
// import AccessoriesDetail20 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail20';
// import AccessoriesDetail21 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail21';
// import AccessoriesDetail22 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail22';
// import AccessoriesDetail23 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail23';
// import AccessoriesDetail24 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail24';
// import AccessoriesDetail25 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail25';
// import AccessoriesDetail26 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail26';
// import AccessoriesDetail27 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail27';
// import AccessoriesDetail28 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail28';
// import AccessoriesDetail29 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail29';
// import AccessoriesDetail30 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail30';
// import AccessoriesDetail31 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail31';
// import AccessoriesDetail32 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail32';
// import AccessoriesDetail33 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail33';
// import AccessoriesDetail34 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail34';
// import AccessoriesDetail35 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail35';
// import AccessoriesDetail36 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail36';
// import Drawer1 from './Components/Turya/Turya-categorypages/Detailed-turya/Drawer1';
// import Drawer2 from './Components/Turya/Turya-categorypages/Detailed-turya/Drawer2';
// import Drawer3 from './Components/Turya/Turya-categorypages/Detailed-turya/Drawer3';
// import Drawer4 from './Components/Turya/Turya-categorypages/Detailed-turya/Drawer4';
// import Drawer5 from './Components/Turya/Turya-categorypages/Detailed-turya/Drawer5';
// import Drawer6 from './Components/Turya/Turya-categorypages/Detailed-turya/Drawer6';
// import SeatingDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail2';
// import SeatingDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail3';
// import SeatingDetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail4';
// import SeatingDetail5 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail5';
// import SeatingDetail6 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail6';
// import SeatingDetail7 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail7';
// import SeatingDetail8 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail8';
// import SeatingDetail30 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail30';
// import SeatingDetail31 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail31';
// import SeatingDetail32 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail32';
// import SeatingDetail33 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail33';
// import SeatingDetail34 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail34';
// import SeatingDetail35 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail35';
// import SeatingDetail36 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail36';
// import SeatingDetail37 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail37';
// import SeatingDetail38 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail38';
// import SeatingDetail9 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail9';
// import SeatingDetail10 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail10';
// import SeatingDetail11 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail11';
// import SeatingDetail12 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail12';
// import SeatingDetail13 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail13';
// import SeatingDetail14 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail14';
// import SeatingDetail15 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail15';
// import SeatingDetail16 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail16';
// import SeatingDetail17 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail17';
// import SeatingDetail18 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail18';
// import SeatingDetail19 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail19';
// import SeatingDetail20 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail20';
// import SeatingDetail21 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail21';
// import SeatingDetail22 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail22';
// import SeatingDetail23 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail23';
// import SeatingDetail24 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail24';
// import SeatingDetail25 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail25';
// import SeatingDetail26 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail26';
// import SeatingDetail27 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail27';
// import SeatingDetail28 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail28';
// import SeatingDetail29 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail29';
// import BedroomDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/BedroomDetail1';
// import BedroomDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/BedroomDetail2';
// import BedroomDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/BedroomDetail3';
// import BedroomDetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/BedroomDetail4';
// import BedroomDetail5 from './Components/Turya/Turya-categorypages/Detailed-turya/BedroomDetail5';
// import BedroomDetail6 from './Components/Turya/Turya-categorypages/Detailed-turya/BedroomDetail6';
// import MirrorDetail13 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail13';
// import MirrorDetail14 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail14';
// import MirrorDetail15 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail15';
// import MirrorDetail16 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail16';
// import MirrorDetail17 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail17';
// import MirrorDetail18 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail18';
// import MirrorDetail19 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail19';
// import MirrorDetail20 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail20';
// import MirrorDetail21 from './Components/Turya/Turya-categorypages/Detailed-turya/MirrorDetail21';
// import CentreTableDetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail1';
// import CentreTableDetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail2';
// import CentreTableDetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail3';
// import CentreTableDetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail4';
// import CentreTableDetail5 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail5';
// import CentreTableDetail6 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail6';
// import CentreTableDetail7 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail7';
// import CentreTableDetail8 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail8';
// import CentreTableDetail9 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail9';
// import CentreTableDetail10 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail10';
// import CentreTableDetail11 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail11';
// import CentreTableDetail12 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail12';
// import CentreTableDetail13 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail13';
// import CentreTableDetail15 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail15';
// import CentreTableDetail16 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail16';
// import CentreTableDetail17 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail17';
// import CentreTableDetail18 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail18';
// import CentreTableDetail19 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail19';
// import CentreTableDetail20 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail20';
// import CentreTableDetail21 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail21';
// import CentreTableDetail22 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail22';
// import CentreTableDetail23 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail23';
// import CentreTableDetail24 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail24';
// import CentreTableDetail25 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail25';
// import CentreTableDetail26 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail26';
// import CentreTableDetail27 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail27';
// import CentreTableDetail28 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail28';
// import CentreTableDetail29 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail29';
// import CentreTableDetail30 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail30';
// import CentreTableDetail31 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail31';
// import CentreTableDetail32 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail32';
// import CentreTableDetail33 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail33';
// import CentreTableDetail34 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail34';
// import CentreTableDetail35 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail35';
// import CentreTableDetail36 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail36';
// import CentreTableDetail37 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail37';
// import CentreTableDetail38 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail38';
// import CentreTableDetail39 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail39';
// import CentreTableDetail40 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail40';
// import CentreTableDetail41 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail41';
// import CentreTableDetail42 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail42';
// import CentreTableDetail43 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail43';
// import CentreTableDetail44 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail44';
// import CentreTableDetail45 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail45';
// import CentreTableDetail46 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail46';
// import CentreTableDetail47 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail47';
// import CentreTableDetail48 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail48';
// import CentreTableDetail49 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail49';
// import CentreTableDetail50 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail50';
// import CentreTableDetail51 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail51';
// import CentreTableDetail52 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail52';
// import CentreTableDetail53 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail53';
// import CentreTableDetail54 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail54';
// import CentreTableDetail55 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail55';
// import CentreTableDetail57 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail57';
// import CentreTableDetail56 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail56';
// import CentreTableDetail14 from './Components/Turya/Turya-categorypages/Detailed-turya/CentreTableDetail14';
import Actcall from './Components/Projects/DetailedProjects/Act Call/Actcall';
import Eventdecor from './Components/Projects/DetailedProjects/Eventdecor/Eventdecor';
import Mahilampoo from './Components/Projects/DetailedProjects/Mahilampoo/Mahilampoo';
import Malli from './Components/Projects/DetailedProjects/Malli/Malli';
import JJmills from './Components/Projects/DetailedProjects/JJmills/JJmills';
import Lnbjewellers from './Components/Projects/DetailedProjects/LNB Jewellers/Lnbjewellers';
import Precot from './Components/Projects/DetailedProjects/Precot/Precot';
import Precol from './Components/Projects/DetailedProjects/Precol/Precol';
import SPMKadrimills from './Components/Projects/DetailedProjects/SPM Kadrimills/SPMKadrimills';
import Berylhouse from './Components/Projects/DetailedProjects/Beryl House/Berylhouse';
import Circularhouse from './Components/Projects/DetailedProjects/Circular House/Circularhouse';
import Cottonblossom from './Components/Projects/DetailedProjects/Cotton Blossom/Cottonblossom';
import Isaiveedu from './Components/Projects/DetailedProjects/Isai Veedu/Isaiveedu';
import Mootramveedu2 from './Components/Projects/DetailedProjects/Mootram Veedu 2/Mootramveedu2';
import Oculus from './Components/Projects/DetailedProjects/Oculus House/Oculus';
import Sepiahouse from './Components/Projects/DetailedProjects/Sepia House/Sepiahouse';
import Terra from './Components/Projects/DetailedProjects/Terra House/Terra';
import Treehouse from './Components/Projects/DetailedProjects/Tree of Life House/Treehouse';
import Victorianhouse from './Components/Projects/DetailedProjects/Victorian House/Victorianhouse';
import Veedu1 from './Components/Projects/DetailedProjects/Veedu-1/Veedu1';
import Veedu2 from './Components/Projects/DetailedProjects/Veedu-2/Veedu2';
import Veedu3 from './Components/Projects/DetailedProjects/Veedu-3/Veedu3';
import Veedu4 from './Components/Projects/DetailedProjects/Veedu-4/Veedu4';
import Veedu5 from './Components/Projects/DetailedProjects/Veedu-5/Veedu5';
import Veedu6 from './Components/Projects/DetailedProjects/Veedu-6/Veedu6';
import Veedu7 from './Components/Projects/DetailedProjects/Veedu-7/Veedu7';
import Avatharjewellers from './Components/Projects/DetailedProjects/Avathar Jewllers/Avatharjewellers';
import Adamstailor from './Components/Projects/DetailedProjects/Adams Tailor/Adamstailor';
import Anantaboutique from './Components/Projects/DetailedProjects/Ananta Boutique/Anantaboutique';
import Coolcooper from './Components/Projects/DetailedProjects/Cool Cooper Show/Coolcooper';
import Donutvadavalli from './Components/Projects/DetailedProjects/Donut Vadavalli/Donutvadavalli';
import Garmentnook from './Components/Projects/DetailedProjects/Garment Nook/Garmentnook';
import Ishalife from './Components/Projects/DetailedProjects/Isha Life/Ishalife';
import Kotajewellers from './Components/Projects/DetailedProjects/Kota Jewellers/Kotajewellers';
import Mahapalace from './Components/Projects/DetailedProjects/Maha Palace/Mahapalace';
import Pralochnanew from './Components/Projects/DetailedProjects/Pralochna New/Pralochnanew';
import Pralochnaold from './Components/Projects/DetailedProjects/Pralochna Old/Pralochnaold';
import Purplebay from './Components/Projects/DetailedProjects/Purple Bay/Purplebay';
import Soupandsaladadyar from './Components/Projects/DetailedProjects/Soup and Salad Adyar/Soupandsaladadyars';
import Soupandsaladttk from './Components/Projects/DetailedProjects/Soup and Salad TTk/Soupandsaladtk';
import Bharanisilks from './Components/Projects/DetailedProjects/Bharani silks/Bharanisilks';
import Journal from './Components/Journal/Journal';
import Chiar from './Components/Projects/DetailedProjects/Chiar/Chiar';
import Vasavitemple from './Components/Projects/DetailedProjects/Vasavi temple/Vasavitemple';
import Veedu8 from "./Components/Projects/DetailedProjects/Veedu-8/Veedu8";
import Publications from "./Components/Journal/Publications/Publications";
import Thoughts from "./Components/Journal/Thoughts/Thoughts";
import Recognitions from "./Components/Journal/Recognitions/Recognitions";
import Insideout from "./Components/Journal/Publications/Publication1/Insideout";
import Interiorexterior from "./Components/Journal/Publications/Publications2/Interiorexterior";
import Interiorexterior2 from "./Components/Journal/Publications/Publications3/Interiorexterior2";
import Societyinterior from "./Components/Journal/Publications/Publications4/Societyinterior";
import Avinashilingam from "./Components/Journal/Recognitions/Recognitions1/Avinashilingam";
import Designperspective from "./Components/Journal/Recognitions/Recognitions2/Designperspective";
import Foaid from "./Components/Journal/Recognitions/Recognitions3/Foaid";
import Foundersthought from "./Components/Journal/Thoughts/Thoughts1/Foundersthought";
import Functionality from "./Components/Journal/Thoughts/Thoughts2/Functionality";
import Genusloci from "./Components/Journal/Thoughts/Thoughts3/Genusloci";
import Materiality from "./Components/Journal/Thoughts/Thoughts4/Materiality";
import Wade from "./Components/Journal/Recognitions/Recognitions4/Wade";
import Design from "./Components/Journal/Design/Design";
import Artisanaldesign from "./Components/Journal/Design/Design1/Artisanaldesign";
import Handsketch from "./Components/Journal/Design/Design2/Handsketch";
import Turya from "./Components/Journal/Design/Design3/Turya";
import Planning from "./Components/Journal/Planning/Planning";
import Spatial from "./Components/Journal/Planning/Planning1/Spatial";
import Environment from "./Components/Journal/Planning/Planning2/Environment";
import Ksir from "./Components/Projects/DetailedProjects/Ksir School/Ksir";
import Balledoftime from "./Components/Projects/DetailedProjects/Aballedoftime/Balledoftime";
// import Popup from "./Components/Team/Popupform";




const App = () => {
 

  return (

    <Router>
     
      <Routes>
      
        
        <Route path="/" element={<Carousel />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        {/* <Route path="/Team" element={<Popup />} /> */}
        <Route path="/Services" element={<Services />} /> 
        {/* <Route path="/Turya" element={<Turya />} />  */}
        <Route path="/Journal" element={<Journal />} /> 
        {/* <Route path="/Turyaproduct" element={<Turyaproduct />} />  */}
        {/* <Route path="/Detailproduct" element={<Detailproduct />} />  */}
        <Route path="/gallery" element={<Gallery />} /> {/* Updated path */}
        <Route path="/Projectmain" element={<Projectmain />} /> 
        <Route path="/Contact" element={<Contact />} />
        
        
      
        {/* <Route path="/Kayal" element={<Kayal />} /> */}
        {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
        <Route path="/project/1" element={<Kayal />} />
        <Route path="/project/9" element={<Springmountschool />} />
        <Route path="/project/2" element={<Centuryappearls />} />
        {/* <Route path="/project/13" element={<Ishaschool />} /> */}
        <Route path="/project/4" element={<Colorhouse />} />
        <Route path="/project/7" element={<Lighthouse />} />
        <Route path="/project/15" element={<Donutsai />} />
        <Route path="/project/16" element={<DonutThu />} />
        <Route path="/project/14" element={<Elgi />} />
        <Route path="/project/11" element={<Texmo />} />
        <Route path="/project/12" element={<Houseofearthen />} />
        <Route path="/project/8" element={<Stackhouse />} />
        <Route path="/project/5" element={<Yarnhouse />} />
        <Route path="/project/6" element={<Mootram />} />
        <Route path="/project/10" element={<Nalanda />} />
        <Route path="/project/17" element={<Sks />} />
        <Route path="/project/18" element={<Villanunc />} />
        <Route path="/project/3" element={<Summerhouse />} />
        <Route path="/project/19" element={<Actcall />} />
        <Route path="/project/20" element={<Eventdecor />} />
        <Route path="/project/21" element={<Mahilampoo />} />
        <Route path="/project/22" element={<Malli />} />
        <Route path="/project/23" element={<JJmills />} />
        <Route path="/project/24" element={<Lnbjewellers />} />
        <Route path="/project/25" element={<Precot />} />
        <Route path="/project/26" element={<Precol />} />
        <Route path="/project/27" element={<SPMKadrimills />} />
        <Route path="/project/28" element={<Berylhouse />} />
        <Route path="/project/29" element={<Circularhouse />} />
        <Route path="/project/30" element={<Cottonblossom />} />
        <Route path="/project/31" element={<Isaiveedu />} />
        {/* <Route path="/project/32" element={<Mootramveedu2 />} /> */}
        <Route path="/project/33" element={<Oculus />} />
        <Route path="/project/34" element={<Sepiahouse />} />
        <Route path="/project/35" element={<Terra />} />
        <Route path="/project/36" element={<Treehouse />} />
        <Route path="/project/37" element={<Victorianhouse />} />
        <Route path="/project/38" element={<Veedu1 />} />
        <Route path="/project/39" element={<Veedu2 />} />
        <Route path="/project/40" element={<Veedu3 />} />
        <Route path="/project/41" element={<Veedu4 />} />
        <Route path="/project/42" element={<Veedu5 />} />
        <Route path="/project/43" element={<Veedu6 />} />
        <Route path="/project/44" element={<Veedu7 />} />
        <Route path="/project/45" element={<Avatharjewellers />} />
        <Route path="/project/60" element={<Chiar />} />
        <Route path="/project/61" element={<Vasavitemple />} />
        <Route path="/project/62" element={<Veedu8 />} />
        <Route path="/project/63" element={<Ksir />} />

       
        <Route path="/project/46" element={<Adamstailor />} />
        <Route path="/project/47" element={<Anantaboutique />} />
        <Route path="/project/48" element={<Coolcooper />} />
        <Route path="/project/49" element={<Donutvadavalli />} />
        <Route path="/project/50" element={<Garmentnook />} />
        <Route path="/project/51" element={<Ishalife />} />
        <Route path="/project/52" element={<Kotajewellers />} />
        <Route path="/project/53" element={<Mahapalace />} />
        <Route path="/project/54" element={<Pralochnanew />} />
        <Route path="/project/55" element={<Pralochnaold />} />
        <Route path="/project/56" element={<Purplebay />} />
        <Route path="/project/57" element={<Soupandsaladadyar />} />
        <Route path="/project/58" element={<Soupandsaladttk />} />
        <Route path="/project/59" element={<Bharanisilks />} />
        <Route path="/project/64" element={<Balledoftime />} />
      
        
        <Route path="/project/:id" element={<ProjectDetails />} />
      
        <Route path="/Publications" element={<Publications />} /> 
        <Route path="/Thoughts" element={<Thoughts />} /> 
        <Route path="/Recognitions" element={<Recognitions />} /> 


        <Route path="/Publications1" element={<Insideout />} /> 
        <Route path="/Publications2" element={<Interiorexterior />} /> 
        <Route path="/Publications3" element={<Interiorexterior2 />} /> 
        <Route path="/Publications4" element={<Societyinterior />} /> 

        <Route path="/Recognitions1" element={<Avinashilingam />} /> 
        <Route path="/Recognitions2" element={<Designperspective />} /> 
        <Route path="/Recognitions3" element={<Foaid />} /> 
        <Route path="/Recognitions4" element={<Wade />} /> 


        <Route path="/Thoughts1" element={<Foundersthought />} /> 
        <Route path="/Thoughts2" element={<Functionality />} /> 
        <Route path="/Thoughts3" element={<Genusloci />} /> 
        <Route path="/Thoughts4" element={<Materiality />} /> 


        <Route path="/Design" element={<Design />} /> 
        <Route path="/Artisanal" element={<Artisanaldesign />} /> 
        <Route path="/Handsketch" element={<Handsketch />} /> 
        <Route path="/Turya" element={<Turya />} /> 
        

        <Route path="/Planning" element={<Planning />}/>
        <Route path="/theSpatial" element={<Spatial />}/>
        <Route path="/Environment" element={<Environment />}/>
       
      

      </Routes>

    </Router>

  
  );
};

export default App;

