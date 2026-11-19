import React, { useEffect }  from "react";
import "./Team.css";
// import img1 from "../images/ab-1.png";
// import img3 from "../images/ab-2.jpg";
import img2 from "../images/logo.webp";
// import ic1 from "../images/arrow-p.png";
import founder1 from '../images/Karthi.webp'
import founder2 from '../images/Ruckmani.webp'
import founder3 from '../images/Shreya.webp'
import employee from './team1.webp'
import NavBar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';
const Team = () => {
  const { t} = useTranslation('global');
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
        <NavBar className="custom-navbars" />
  
    {/* ...................................... Meet The Team .............................................  */}
    
  <div className="team-container">
    <div className="team-head-div"><h1 className="team-land-head">{t('Teamhead-1')}<br/> <span className="span-head">{t('Teamhead-2')}</span><br/> {t('Teamhead-3')}<span><img className="team-logo" src={img2} alt="" srcset="" /></span></h1> </div>
   
  </div>
  <div className="container-fluid sec-team-container2">
             <div className="team-second-contain">
                <h5 className='Team'>{t('TheTeam')}</h5>
              <div className="row justify-content-center second-container-row">
                <div className='col-12 col-sm-12 col-md-10 col-lg-5 team-second-col-1'><img className='founderimg' src={founder1} alt="" srcset="" />
                            <h5 className='mt-2 mb-5 foundersname'>{t('karthikeyan')}</h5>                
                </div>
                <div className='col-12 col-sm-12 col-md-10 col-lg-7 team-second-col-2'><h2 className='team-quote'>{t('karthikeyan-quote-1')}<br></br>{t('karthikeyan-quote-2')}</h2>
                <div className="row justify-content-center second-container-inner-row">
                  <div className='col-12 col-sm-12 col-md-8 col-xl-7 team-second-container-in-col1'><h5>{t('karthikeyan-head')}</h5><p>{t('karthikeyan-description-1')}<br/><br/>{t('karthikeyan-description-2')}


</p></div>
                  <div className='col-12 col-sm-12 col-md-4 col-xl-5 team-second-container-in-col2'><h5>{t('the-person')}</h5>
                  <h6>{t('karthikeyan-quality-1')}</h6>
                  <h6>{t('karthikeyan-quality-2')}</h6>
                  <h6>{t('karthikeyan-quality-3')}</h6>
                  <h6>{t('karthikeyan-quality-4')}</h6>
                  <h6>{t('karthikeyan-quality-5')}</h6>
                  <h6>{t('karthikeyan-quality-6')}</h6>
                  <h6>{t('karthikeyan-quality-7')}</h6>
                  <h6>{t('karthikeyan-quality-8')}</h6>
                  <h6>{t('karthikeyan-quality-9')}</h6>
                
                    </div>
                  </div></div>
              </div>
 {/* .................................. Founder 2 ............................ */}
              <div className="row justify-content-center second-container-row">
                <div className='col-12 col-sm-12 col-md-10 col-lg-5 team-second-col-1'><img className='founderimg mt-5' src={founder2} alt="" srcset="" />
                            <h5 className='mt-2 mb-5 foundersname'>{t('Ruckmini')}</h5>                
                </div>
                <div className='col-12 col-sm-12 col-md-10 col-lg-7 team-second-col-2'><h2 className='team-quote'>{t('Ruckmini-quote-1')}</h2>
                <div className="row justify-content-center second-container-inner-row">
                  <div className='col-12 col-sm-12 col-md-8 col-xl-7 team-second-container-in-col1'><h5>{t('Ruckmini-head')}</h5><p> {t('Ruckmini-description-1')}



</p></div>
                  <div className='col-12 col-sm-12 col-md-4 col-xl-5 team-second-container-in-col2'><h5>{t('the-person')}</h5>
                  <h6>{t('Ruckmini-quality-1')}</h6>
                  <h6>{t('Ruckmini-quality-2')}</h6>
                  <h6>{t('Ruckmini-quality-3')} </h6>
                  <h6>{t('Ruckmini-quality-4')}</h6>
                  <h6>{t('Ruckmini-quality-5')}</h6>
                  <h6>{t('Ruckmini-quality-6')}</h6>
                  <h6>{t('Ruckmini-quality-7')}</h6>
                 
                
                    </div>
                  </div></div>
              </div>
  {/* .................................. Founder 3 ............................ */}
              <div className="row justify-content-center second-container-row">
                <div className='col-12 col-sm-12 col-md-10 col-lg-5 team-second-col-1 team-founder-col'><img className='founderimg mt-5' src={founder3} alt="" srcset="" />
                            <h5 className='mt-2 mb-5 foundersname'>{t('shreya')}</h5>                
                </div>
                <div className='col-12 col-sm-12 col-md-10 col-lg-7 team-second-col-2'><h2 className='team-quote'>{t('shreya-quote-1')}<br></br>{t('shreya-quote-2')}</h2>
                <div className="row justify-content-center second-container-inner-row">
                  <div className='col-12 col-sm-12 col-md-8 col-xl-7 team-second-container-in-col1'><h5>{t('shreya-head')}</h5><p> {t('shreya-description-1')}
                 




</p></div>
                  <div className='col-12 col-sm-12 col-md-4 col-xl-5 team-second-container-in-col2'><h5>{t('the-person')}</h5>
                  <h6>{t('shreya-quality-1')}</h6>
                  <h6>{t('shreya-quality-2')}</h6>
                  <h6>{t('shreya-quality-3')} </h6>
                  <h6>{t('shreya-quality-4')}</h6>
                  <h6>{t('shreya-quality-5')}</h6>
                  <h6>{t('shreya-quality-6')}</h6>
                  <h6>{t('shreya-quality-7')}</h6>
                  <h6>{t('shreya-quality-8')}</h6>
                  <h6>{t('shreya-quality-9')}</h6>
                 
                
                    </div>
                  </div></div>
              </div>
             </div>  
        </div>
 {/* ........................... Employees ..................................  */}
        
         <div className="container-fluid emp-container">
              <h1 className="emp-head">{t('employee-head')}</h1>
              <p>{t('employee-para')}
</p>
<img src={employee} alt="" srcset="" />
        </div>

       
  </>
  );
};

export default Team;