import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Genusloci.css'
import Genusloci1 from './images/k (1).jpg'
import Genusloci2 from './images/k (1).webp'
import Genusloci3 from './images/WE_P3955 1.png'
import { useTranslation } from 'react-i18next'; 

const Genusloci = () => {
    const { t, i18n } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
        <NavBar className="project-custom-navbar" />
      <div className="top-text">
        <div className="journal-menu"><Link to="/Journal">{t('journal-menu-all')},</Link> <Link to="/Thoughts">{t('journal-menu-thoughts')},</Link> <Link to="/Recognitions">{t('journal-menu-recognitions')},</Link>  <Link to="/Publications">{t('journal-menu-publications')},</Link> <Link to="/Planning">{t('journal-menu-planning')},</Link> <Link to="/Design">{t('journal-menu-design')}</Link>  </div>
        <h2 className="journal">{t('journal-menu-head')}</h2>
      </div>
      {/* ............................................... Main Container .............................................................. */}
      <div className="container-fluid">
      <div className="inner-container-interiorexterior">
        <div className="reg-text interiorexterior-headtext">
                        <h3>{t('journal-thought3-head-genusloci')}</h3>
                         <h3>03/06/24
                         </h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Genusloci2">
          <div className="row Genusloci-container2-row">
            <div className="col-8 Genusloci-container2-col1">{t('journal-thought3-head-genusloci')}</div>
            <div className="col-4 Genusloci-container2-col2"><img src={Genusloci2} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Genusloci3">
          <div className="row Genusloci-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Genusloci-container3-col1"><img src={Genusloci1} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Genusloci-container3-col2">
              
                <h2 className='mt-2 inner-head'>{t('journal-thought3-head-genusloci')}</h2>
                <div className="row">
                    <div className="col">
                      <p className='mt-2'>{t('journal-thought3-para1')}</p>
                      <p className='mt-2'>{t('journal-thought3-para2')}</p>
                    
                    </div>
                    <div className="col">
                        <p className='mt-2'>{t('journal-thought3-para3')}</p>
                        
                    </div>
                    <img className='w-100 genusloci-last-img' src={Genusloci3} alt="" srcset="" />
                </div>
                
               
               
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Genusloci