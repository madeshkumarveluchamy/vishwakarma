import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Spatial.css'
import spatial1 from './Images/GOPR3568.webp'
import spatial2 from './Images/_DSC8453.jpg'
import spatial3 from './Images/_DSC8469-HDR.jpg'
import { useTranslation } from 'react-i18next'

const Spatial = () => {
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
      
      <div className="container-fluid">
      <div className="inner-container-interiorexterior">
        <div className="reg-text interiorexterior-headtext">
                        <h3>{t('journal-planning1-head1')}</h3>
                         <h3>18/04/23</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Artisanaldesign2">
          <div className="row Spatial-container2-row">
            <div className="col-8 Spatial-container2-col1">{t('journal-planning1-head1')}</div>
            <div className="col-4 Spatial-container2-col2"><img src={spatial1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Artisanaldesign3">
          <div className="row Spatial-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Spatial-container3-col1"><img src={spatial3} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Spatial-container3-col2">
              
                <h2 className='mt-2 inner-head-avinashi inner-head'>{t('journal-planning1-head1')}</h2>
                <div className="row">
                    <div className="col journal-para"><p className='mt-2'>{t('journal-planning1-para1')} 
                    </p>
                    
                    <p className='mt-1'>{t('journal-planning1-para2')}</p>
                    <p className='mt-1'>{t('journal-planning1-para3')}</p>
                    <p className='mt-1'>{t('journal-planning1-para4')}</p>
                    <p className='mt-1'>{t('journal-planning1-para5')}</p>
                    
                    
                                        </div>
                    <div className="col journal-para">
                    <p className='mt-1'>{t('journal-planning1-para6')}</p>
                    <p className='mt-2'>{t('journal-planning1-para7')}</p>
                    <p className='mt-1'>{t('journal-planning1-para8')}</p>
                    <p className='mt-1'>{t('journal-planning1-para9')}</p>
                    <p className='mt-1'>{t('journal-planning1-para10')}</p>
                </div>
                <img className='w-100' src={spatial2} alt="" srcset="" /> 
                </div>
                
              
                
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Spatial