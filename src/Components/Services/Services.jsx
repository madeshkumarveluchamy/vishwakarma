import React, { useEffect }  from 'react'
import '../Services/Services.css'
import NavBar from '../Navbar/Navbar';
import plus from '../images/plus.webp'
import wallimg from '../images/H-70.webp'
import blueprint1 from '../images/serimg1.webp'
import blueprint2 from '../images/bluprint1.webp'
import blueprint3 from '../images/blueprint2.webp'
import blueprint4 from '../images/blueprint3.webp'
import blueprint5 from '../images/blueprint4.webp'
import blueprint6 from '../images/blueprint5.webp'
import blueprint7 from '../images/blueprint6.webp'
import blueprint8 from '../images/blueprint7.webp'
import blueprint9 from '../images/blueprint8.webp'
import blueprint10 from '../images/1.webp'
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t} = useTranslation('global');
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBar className="custom-navbars" />
        {/* .................................................... Service First Container ............................................................. */}
        <div className='service-page'>
            <div className="row service-first-row justify-content-center">
                <div className="col-5 col-sm-5 col-md-4 fir-col"><h1>{t('Service-white-head-1')}<br></br>{t('Service-white-head-2')} </h1></div>
                <div className="col-2 col-sm-2 col-md-1 sec-col"><img src={plus} alt="" srcset="" /></div>
                <div className="col-5 col-sm-5 col-md-4 thi-col"><h1>{t('Service-black-head-1')}<br></br>{t('Service-black-head-2')}</h1></div>
            </div>
           <div className='service-para-div'>{t('Service-black-para-1')}<br></br>{t('Service-black-para-2')}<p className='service-land-para'> </p></div> 
        </div>
      {/* .......................................................... Second Service Container ................................................         */}
         <div className="container-fluid sec-service-container">
             <div className="service-second-contain">
              <div className="row justify-content-center second-container-rows">
                <div className='col-12 col-sm-12 col-md-10 col-lg-6 service-second-col-1'><img className='wallimg' src={wallimg} alt="" srcset="" /></div>
                <div className='col-12 col-sm-12 col-md-10 col-lg-6 service-second-col-2'><img className='blueprint1' src={blueprint1} alt="" srcset="" />
                <div className="row justify-content-center second-container-inner-row">
                  <div className='col-12 col-sm-12 col-md-8 col-xl-6 service-second-container-in-col1'><h5>{t('Service-the-brand')}</h5><p>{t('Service-the-brand-para')}</p></div>
                  <div className='col-12 col-sm-12 col-md-4 col-xl-6 service-second-container-in-col2'><h5>{t('Service-specialzingin')}</h5>
                 <h6>{t('Service-specialzingin-quality-1')}</h6>
                 <h6>{t('Service-specialzingin-quality-2')}</h6>
                 <h6>{t('Service-specialzingin-quality-3')}</h6>
                 <h6>{t('Service-specialzingin-quality-4')}</h6>
                 <h6>{t('Service-specialzingin-quality-5')}</h6>
                 <h6>{t('Service-specialzingin-quality-6')}</h6>
                 <h6>{t('Service-specialzingin-quality-7')}</h6>
                  </div>
                  </div></div>
              </div>
             </div>  
        </div>
            
{/* ........................................................ Service Container Three ..........................................................................        */}
         <div className="container-fluid service-third-container">
            <img className='blueprint-1' src={blueprint10} alt="" srcset="" />
            <img className='blueprint-2' src={blueprint4} alt="" srcset="" />
            <img className='blueprint-3' src={blueprint7} alt="" srcset="" />
         </div>  
         <div className="container-fluid service-third-container">
            <img className='blueprint-1' src={blueprint5} alt="" srcset="" />
            <img className='blueprint-2' src={blueprint3} alt="" srcset="" />
            <img className='blueprint-3' src={blueprint6} alt="" srcset="" />
         </div>  
         <div className="container-fluid service-third-container">
            <img className='blueprint-1' src={blueprint2} alt="" srcset="" />
            <img className='blueprint-2' src={blueprint8} alt="" srcset="" />
            <img className='blueprint-3' src={blueprint9} alt="" srcset="" />
          
         </div>  

          {/* <div className="blueprint-contain"> */}
            {/* <div className="row justify-content-center">
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint1} alt="" srcset="" /></div>
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint4} alt="" srcset="" /></div>
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint7} alt="" srcset="" /></div>
            </div>
            <div className="row mt-2 justify-content-center">
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint5} alt="" srcset="" /></div>
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint3} alt="" srcset="" /></div>
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint6} alt="" srcset="" /></div>
            </div>
            <div className="row mt-2 justify-content-center">
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint2} alt="" srcset="" /></div>
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint8} alt="" srcset="" /></div>
              <div className="col-10 col-sm-10 col-md-4 blueprint-col mt-2"><img className='blueprint' src={blueprint9} alt="" srcset="" /></div>
            </div> */}
          {/* </div> */}
    </div>
  )
}

export default Services