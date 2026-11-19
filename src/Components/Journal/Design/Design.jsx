import React, { useEffect }  from 'react'
import NavBar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import "./Design.css"
import design1 from './DesignImages/Designmain1.webp'
import design2 from './DesignImages/Designmain2.webp'

import design3 from './DesignImages/Designmain3.webp'

import { useTranslation } from 'react-i18next'

const Design = () => {
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
      <div className="container-fluid Design-main-container">
              <div className="inner-container-Design">
                <div className="row Design-first-row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-7 inner-first-col-Design">
                      <div className="reg-text">
                        <h3>{t('journal-menu-design')}</h3>
                         <h3>12/01/07</h3>
                     </div>
                     <img className='Design1-img' src={design1} alt="" srcset="" />
                     <div className='Design1-para-div'><p>{t('journal-designpage-design1-para')} </p></div>
                     <div className='artisanal-link-div'><Link to="/Artisanal" className='Design11-link'>{t('journal-detail-page-link')}</Link></div>
                     </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 inner-second-col-Design">
                    <div className="reg-text">
                        <h3>{t('journal-menu-design')}</h3>
                         <h3>10/07/24</h3>
                     </div>
                    <div className='Design2-img-div'>
                      <img className='Design2-img' src={design2} alt="" srcset="" />
                    </div> 
                     <p>{t('journal-designpage-design2-para')}</p>
                     <Link to="/Handsketch" className='Design2-link'>{t('journal-detail-page-link')}</Link>
                     <div className="row Design2-col-inner-row">
                        <div className="col-12 col-sm-12 col-md-12 Design2-col-inner-col1">
                        <div className="reg-text">
                        <h3>{t('journal-menu-design')}</h3>
                         <h3>20/05/23</h3>
                     </div>
                     <div className="Design3-img-div"><img className='Design3-img' src={design3} alt="" srcset="" /></div>
                     <p>{t('journal-designpage-design3-para')}</p>
                     <div className='turya-designpage-link-div'><Link to="/Turya" className='Design3-link'>{t('journal-detail-page-link')}</Link></div>
                        </div>
                        {/* <div className="col-12 col-sm-12 col-md-6 Design2-col-inner-col2">
                        <div className="reg-text">
                        <h3>PUBLICATIONS</h3>
                         <h3>01/01/09</h3>
                     </div>
                    <div className="Design4-img-div"><img className='Design4-img' src={publcation4} alt="" srcset="" /></div> 
                     <p>Century Apparels, a state of the art garment factory and corporate office designed in Tamil Nadu, showcased Society Interiors.</p>
                     <Link to="/Design4" className='Design4-link'>Click here to read more</Link>
                        </div> */}
                     </div>
                    </div>
                </div>
              </div>
      </div>
      </div>
    </div>
  )
}

export default Design