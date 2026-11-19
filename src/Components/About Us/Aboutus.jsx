import React from "react";
import "./Aboutus.css";
import { Link } from 'react-router-dom';
import img1 from "../images/ab-1.webp";
import img3 from "../images/ab-2.webp";
import img2 from "../images/logo.webp";
import ic2 from "../images/arrow-p.webp";
import ic1 from "../images/right-arrow_120827.webp";
import NavBar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t} = useTranslation('global');

  return (
    <>
    <div className="main-container">
        <NavBar className="abt-custom-navbar" />
    <div className="section-1">
      <div className="sub-1">
        <div className="h1-wrap">
          <h1 className="h1-1">{t('VISHWA')}</h1>
          <img className="logo" src={img2} alt="logo" />
          <h1 className="h1-2">{t('DESIGN')}</h1>
        </div>
        <img className="landing-img" src={img1} alt="landing" />
        <div>
          <div className="abt-intro-para-container container-fluid">
          <div className="row justify-content-evenly pt-4">
            <div className="col-xxl-5  col-xl-5 col-lg-5  text-start">
              <h2 className="heading">{t('INTRODUCTION')}</h2>
              <p>{t('INTROPara-1')}
                
              </p>
            </div>
            <div className="col-xxl-5  col-xl-5 col-lg-5  text-start">
              <h2 className="heading">{t('Story')}</h2>
              <p>{t('INTROPara-2')}
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="section-2 container-fluid">
      <div className="row ">
        <div className="col-4 hide"></div>
        <div className="col-xxl-4 col-xl-4 col-lg-6  mr-2">
          <h1 className="heading">{t('SOUL')}
            
          </h1>
          <p className="mt-3">{t('SOUL-PARA')}</p>
          <p className="">{t('SOUL-PARA2')}</p>
        </div>
        <div className="col-xl-4 col-lg-6 col-xl-4 col-xl-4">
          <img className="img-2" src={img3} alt="section" />
        </div>
      </div>

      <div className="row mt-5 ">
        {/* <div className="col-4 hide "></div>
        <div className="col-xxl-4 col-xl-4 col-lg-6   bt-sec  ">
          <h2 className="heading">Vishwakarma Design Studio in numbers</h2>
          <p>
            Since 1995, we have implemented more than 500 projects in
            different parts of the country, across a varied typology and style
            of spaces
          </p>
          <div className="gp proj-1">
            <h4>Go to projects</h4>
            <img src={ic1} alt="arrow" />
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-5">
          <h2 className="numbers">30</h2>
          <p>years of experience</p>
          <h1 className="numbers num mt-4 mt-sm-5">6</h1>
          <p>Integrated Platform</p>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-5">
          <h2 className="numbers">1</h2>
          <p>
            disciplines: architecture, interior, product, branding,
            <br /> art and landscape
          </p>
          <h1 className="numbers mt-2 mt-sm-0">500</h1>
          <p>disi</p>
        </div> */}

        <div className="row">
          <div className="col-4 hide"></div>
          <div className="col col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-12  bt-sec">
            <h2 className="heading">{t('VISHWA-NUMBER')}</h2>
            <p>{t('VISHWA-NUMBER-PARA')}
              
            </p>
            <div className="gp proj-1">
            <Link to="/Projectmain"> <h4>{t('GO-TO-PROJECT')}</h4></Link> 
              <img src={ic1} alt="arrow" />
            </div>
          </div>
          <div className="col-10 col-md-8 col-lg-6 col-xl-4 col-xxl-4 numberscol">
            <div className="row num-left">
              <div className="col-5">
                <h2 className="numbers">30</h2>
                <p>{t('EXPERIENCE')}</p>
              </div>
              <div className="col-5">
                <h1 className="numbers ">6</h1>
                <p>{t('DISCIPLINES-1')}<br></br>{t('DISCIPLINES-2')}</p>
              </div>
            </div>
            <div className="row num-left">
              <div className="col-5">
                <h2 className="numbers">1</h2>
                <p>{t('PLATFORM')}</p>
              </div>
              <div className="col-5">
                <h1 className="numbers ">500</h1>
                <p>{t('COMPLETED')}</p>
              </div>
            </div>
            
          </div>
          
        </div>
        

        <div className="gp proj-2 ">
        <Link to="/Projectmain"> <h4>{t('GO-TO-PROJECT')}</h4></Link> 
          <img src={ic1} alt="arrow" />
        </div>
      </div>
    </div>
    </div>
    <div className="abt-extra-page">
    </div>
     <div className="see-team">
      <Link to="/Team">{t('SEE-OUR-TEAM')} </Link>
      <img src={ic2} alt="arrow" />
     </div>
    {/* ...................................... Meet The Team .............................................  */}
    
  
 {/* ........................... Employees ..................................  */}
        
      

       
  </>
  );
};

export default About;