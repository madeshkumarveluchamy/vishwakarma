import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Artisanaldesign.css'
import Artisanaldesign2 from './Images/WE_P0247.jpg'
import Artisanaldesign3 from './Images/_DSC8410.webp'
import Artisanaldesign4 from './Images/ka073 (1).webp'
import { useTranslation } from 'react-i18next'
const Artisanaldesign = () => {
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
                        <h3>{t('journal-design1-head-artist')}</h3>
                         <h3>18/04/23</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Artisanaldesign2">
          <div className="row Artisanaldesign-container2-row">
            <div className="col-8 Artisanaldesign-container2-col1">{t('journal-design1-head-artist')}</div>
            <div className="col-4 Artisanaldesign-container2-col2"><img src={Artisanaldesign3} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Artisanaldesign3">
          <div className="row Artisanaldesign-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Artisanaldesign-container3-col1"><img src={Artisanaldesign2} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Artisanaldesign-container3-col2">
              
                <h2 className='mt-2 inner-head-avinashi inner-head'>{t('journal-design1-head-artist')}</h2>
                <div className="row">
                    <div className="col journal-para"><p className='mt-2'>{t('journal-design1-para1')}</p>
                    <p className='mt-1'>{t('journal-design1-para2')}
                        </p></div>
                    <div className="col journal-para"><p className='mt-2'>{t('journal-design1-para3')}</p>
                    <p className='mt-1'>{t('journal-design1-para4')} 

                </p>
                </div>
                </div>
                
                <img className='mt-2 w-100' src={Artisanaldesign4} alt="" srcset="" />
                
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Artisanaldesign