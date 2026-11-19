import React from 'react'
import NavBar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import "./Thoughts.css"
import thoughts1 from './images/thoughts1.webp'
import thoughts2 from './images/thoughts2.webp'
import thoughts3 from './images/thoughts3.jpg'
import thoughts4 from './images/thoughts4.webp'
import { useTranslation } from 'react-i18next'

const Thoughts = () => {
  const { t, i18n } = useTranslation('global');
    
  return (
    <div>
        <NavBar className="project-custom-navbar" />
        <div className={`journal-root ${i18n.language === 'ta' ? 'tamil-language' : ''}`}>

      <div className="top-text">
       <div className="journal-menu"><Link to="/Journal">{t('journal-menu-all')},</Link> <Link to="/Thoughts">{t('journal-menu-thoughts')},</Link> <Link to="/Recognitions">{t('journal-menu-recognitions')},</Link>  <Link to="/Publications">{t('journal-menu-publications')},</Link> <Link to="/Planning">{t('journal-menu-planning')},</Link> <Link to="/Design">{t('journal-menu-design')}</Link>  </div>
        <h2 className="journal">{t('journal-menu-head')}</h2>
      </div>
      <div className="container-fluid Thoughts-main-container">
              <div className="inner-container-Thoughts">
                <div className="row Thoughts-first-row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 inner-first-col-Thoughts">
                      <div className="reg-text">
                        <h3>{t('journal-menu-thoughts')}</h3>
                         <h3>15/06/24</h3>
                     </div>
                     <img className='Thoughts1-img founder-img' src={thoughts1} alt="" srcset="" />
                   <div className='thoughts1-para'> <p >{t('journal-mainpage-thought1-para')}</p></div> 
                     <div className='founderthoght-link-div thoughts-readmore-link'></div><Link to="/Thoughts1" className='Thoughts1-link'>{t('journal-detail-page-link')}</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 inner-second-col-Thoughts">
                    <div className="reg-text">
                        <h3>{t('journal-menu-thoughts')}</h3>
                         <h3>14/04/24</h3>
                     </div>
                    <div className='thoughts2-div'><img className='Thoughts2-img' src={thoughts3} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-thought3-para')}</p>
                     <Link to="/Thoughts2" className='Thoughts2-link thoughts-readmore-link'>{t('journal-detail-page-link')}</Link>

                     <div className="row Thoughts2-col-inner-row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 Thoughts2-col-inner-col1">
                        <div className="reg-text">
                        <h3>{t('journal-menu-thoughts')}</h3>
                         <h3>03/06/24</h3>
                     </div>
                    <div className='thoughts3-img-div'><img className='Thoughts3-img' src={thoughts2} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-thought2-para')}</p>
                     <Link to="/Thoughts3" className='Thoughts3-link thoughts-readmore-link'>{t('journal-detail-page-link')}</Link>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 Thoughts2-col-inner-col2">
                        <div className="reg-text">
                        <h3>{t('journal-menu-thoughts')}</h3>
                         <h3>10/03/24</h3>
                     </div>
                     <div className='thougts4-img-div'><img className='Thoughts4-img' src={thoughts4} alt="" srcset="" /></div>
                     <p>{t('journal-mainpage-thought4-para')}</p>
                    <div className='materiality-link-div'> <Link to="/Thoughts4" className='Thoughts4-link'>{t('journal-detail-page-link')}</Link></div>
                        </div>
                     </div>
                    </div>
                </div>
              </div>
      </div>
      </div>
    </div>
  )
}

export default Thoughts