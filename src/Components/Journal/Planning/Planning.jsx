import React, { useEffect }  from 'react'
import NavBar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import "./Planning.css"
import plan1 from './Images/_F6B2166.webp'
import plan2 from './Images/GOPR3568.jpg'
import { useTranslation } from 'react-i18next'

const Planning = () => {
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
      <div className="container-fluid Planning-main-container">
              <div className="inner-container-Planning">
                <div className="row Planning-first-row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 inner-first-col-Planning">
                      <div className="reg-text">
                        <h3>{t('journal-menu-planning')}</h3>
                         <h3>12/01/07</h3>
                     </div>
                     <div className="planning1-img-div"><img className='planning1-img' src={plan2} alt="" srcset="" /></div>
                     <div className='planning1-para-div'><p>{t('journal-mainpage-planning1-para')}</p></div>
                     <div className="planning1-link-div">  <Link className='spatial-link' to="/theSpatial">{t('journal-detail-page-link')}</Link></div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 inner-second-col-Planning">
                    <div className="reg-text">
                        <h3>{t('journal-menu-planning')}</h3>
                         <h3>10/07/24</h3>
                     </div>
                    <div className='planning2-img-div'><img className='planning2-img' src={plan1} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-planning2-para')}</p>
                     <Link to="/Environment" className='planning2-link'>{t('journal-detail-page-link')}</Link>
                     
                    </div>
                </div>
              </div>
      </div>
      </div>
    </div>
  )
}

export default Planning