import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Avinashilingam.css'
import avinashilingam1 from './images/1693557975770.webp'
import avinashilingam2 from './images/recognition2.jpg'
import avinashilingam3 from './images/1693557977193.jpg'
import { useTranslation } from 'react-i18next'; 
const Avinashilingam = () => {
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
                        <h3>{t('journal-recognitions1-head-avinashilingam')}</h3>
                         <h3>18/04/23</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-avinashilingam2">
          <div className="row avinashilingam-container2-row">
            <div className="col-8 avinashilingam-container2-col1">{t('journal-recognitions1-inner-head-avinashilingam')}</div>
            <div className="col-4 avinashilingam-container2-col2"><img src={avinashilingam1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-avinashilingam3">
          <div className="row avinashilingam-container2-row">
            <div className="col-12 col-sm-12 col-md-5 avinashilingam-container3-col1"><img src={avinashilingam3} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 avinashilingam-container3-col2">
              
                <h2 className='mt-2 inner-head-avinashi inner-head'>{t('journal-recognitions1-head-avinashilingam')}</h2>
                <div className="row">
                    <div className="col journal-para"><p className='mt-2'>{t('journal-recognitions1-para1')}</p>
                    <p className='mt-2'>{t('journal-recognitions1-para2')}
                        </p></div>
                    <div className="col journal-para"><p className='mt-2'>{t('journal-recognitions1-para3')}</p>
                    <p className='mt-2'>
                </p>
                </div>
                </div>
                
                <img className='mt-1 w-100' src={avinashilingam2} alt="" srcset="" />
                
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Avinashilingam