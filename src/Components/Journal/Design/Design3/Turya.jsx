import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Turya.css'
import Turya1 from './Images/Turya logo (1).webp'
import Turya2 from './Images/Chairs (1).webp'
import Turya3 from './Images/Chairs (2).webp'
import Turya4 from './Images/poster 3x3 2.webp'
import Turya5 from './Images/poster.webp'
import { useTranslation } from 'react-i18next'; 

const Turya = () => {
     const { t, i18n } = useTranslation('global')
  
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
                        <h3>{t('journal-design3-head-turya')}</h3>
                         <h3>18/04/23</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Turya2">
          <div className="row Turya-container2-row">
            <div className="col-8 Turya-container2-col1">{t('journal-design3-head-turya')}</div>
            <div className="col-4 Turya-container2-col2"><img src={Turya1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Handsketch3">
          <div className="row Turya-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Turya-container3-col1"><img src={Turya2} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Turya-container3-col2">
              
                <h2 className='mt-2 inner-head-avinashi inner-head'>{t('journal-design3-head-turya')}</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 journal-para"><p className='mt-2'> {t('journal-design3-para1')}</p>
                    <p className='mt-1'>{t('journal-design3-para2')}</p>
                    <p className='mt-1'>{t('journal-design3-para3')}</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5"> 
                      <img className='w-100 mt-2' src={Turya5} alt="" srcset="" />
                      <img className='w-100 mt-4' src={Turya4} alt="" srcset="" />
                    </div>
                </div>
                
                {/* <img className='mt-2 w-100' src={Handsketch4} alt="" srcset="" /> */}
                
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Turya