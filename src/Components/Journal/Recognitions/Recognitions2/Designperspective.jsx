import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Designperspective.css'
import Designperspective1 from './images/Recognitions2.webp'
import { useTranslation } from 'react-i18next'; 
const Designperspective = () => {
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
                        <h3>{t('journal-recognitions2-head-designperspective')}</h3>
                         <h3>09/08/23</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Designperspective2">
          <div className="row Designperspective-container2-row">
            <div className="col-8 Designperspective-container2-col1">{t('journal-recognitions2-head-designperspective')}</div>
            <div className="col-4 Designperspective-container2-col2"><img src={Designperspective1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Designperspective3">
          <div className="row Designperspective-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Designperspective-container3-col1"><img src={Designperspective1} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Designperspective-container3-col2">
              
                <h2 className='mt-2 inner-head'>{t('journal-recognitions2-inner-head-designperspective')}</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 journal-para"><p className='mt-2'>{t('journal-recognitions2-para1')}
                        </p></div>
                    <div className="col-12 col-sm-12 col-md-3"><p className='mt-2'></p></div>
                </div>
                
                
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Designperspective