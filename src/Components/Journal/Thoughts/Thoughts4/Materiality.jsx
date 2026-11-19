import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Materiality.css'
import Materiality1 from './images/_DSC8494.webp'
import Materiality2 from './images/_DSC8497 1.jpg'
import Materiality3 from './images/_DSC8559.jpg'
import Materiality4 from './images/_DSC8757.webp'
import { useTranslation } from 'react-i18next'

const Materiality = () => {
  const { t, i18n } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
        <NavBar className="project-custom-navbar" />
        <div className={`journal-root ${i18n.language === 'ta' ? 'tamil-language' : ''}`}>

      <div className="top-text">
       <div className="journal-menu"><Link to="/Journal">{t('journal-menu-all')},</Link> <Link to="/Thoughts">{t('journal-menu-thoughts')},</Link> <Link to="/Recognitions">{t('journal-menu-recognitions')},</Link>  <Link to="/Publications">{t('journal-menu-publications')},</Link> <Link to="/Planning">{t('journal-menu-planning')},</Link> <Link to="/Design">{t('journal-menu-design')}</Link>  </div>
        <h2 className="journal">{t('journal-menu-head')}</h2>
      </div>
      {/* ............................................... Main Container .............................................................. */}
      <div className="container-fluid">
      <div className="inner-container-interiorexterior">
        <div className="reg-text interiorexterior-headtext">
                        <h3>{t('journal-thought4-head-materiality')}</h3>
                         <h3>10/03/24</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Materiality2">
          <div className="row Materiality-container2-row">
            <div className="col-8 Materiality-container2-col1">{t('journal-thought4-head-materiality')}</div>
            <div className="col-4 Materiality-container2-col2"><img src={Materiality1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Materiality3">
          <div className="row Materiality-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Materiality-container3-col1"><img src={Materiality3} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Materiality-container3-col2">
              
                <h2 className='mt-2 inner-head'>{t('journal-thought4-head-materiality')}</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6"><p className='mt-1'>{t('journal-thought4-para1')} </p>
                                         <p className='mt-1'>{t('journal-thought4-para2')}</p>
                                         <p className='mt-1'>{t('journal-thought4-para3')}</p>
                    
                    </div>
                    <div className="col">
                    
                    <img className='thoughts4-img3 w-100' src={Materiality2} alt="" srcset="" />
                        
                   
                    </div>
                    {/* */}
                </div>
                
                
               
               
            
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Materiality