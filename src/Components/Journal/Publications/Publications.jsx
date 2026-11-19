import React, { useEffect }  from 'react'
import NavBar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import "./Publications.css"
import publcation1 from './images/Publication1.webp'
import publcation2 from './images/Publicarion2.webp'
import publcation3 from './images/Publication3.webp'
import publcation4 from './images/Publication4.webp'
import { useTranslation } from 'react-i18next'

const Publications = () => {
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
      <div className="container-fluid publications-main-container">
              <div className="inner-container-publications">
                <div className="row publications-first-row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-7 inner-first-col-publication">
                      <div className="reg-text">
                        <h3>{t('journal-menu-publications')}</h3>
                         <h3>12/01/07</h3>
                     </div>
                     <img className='publication1-img' src={publcation1} alt="" srcset="" />
                     <div className='publication1-para-div'><p>{t('journal-mainpage-publications3-para')}</p></div>
                    <div className="publication1-link-div"><Link to="/Publications1" className='publication11-link'>{t('journal-detail-page-link')}</Link></div> 
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 inner-second-col-publication">
                    <div className="reg-text">
                        <h3>{t('journal-menu-publications')}</h3>
                         <h3>10/07/24</h3>
                     </div>
                    <div className='publication2-img-div'><img className='publication2-img' src={publcation2} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-publications4-para')}</p>
                     <Link to="/Publications2" className='publication2-link'>{t('journal-detail-page-link')}</Link>
                     <div className="row publication2-col-inner-row">
                        <div className="col-12 col-sm-12 col-md-6 publicaton2-col-inner-col1">
                        <div className="reg-text">
                        <h3>{t('journal-menu-publications')}</h3>
                         <h3>20/05/23</h3>
                     </div>
                     <div className="publication3-img-div"><img className='publication3-img' src={publcation3} alt="" srcset="" /></div>
                     <p>{t('journal-mainpage-publications1-para')}</p>
                   <div className="publication3-link-div"> <Link to="/Publications3" className='publication3-link'>{t('journal-detail-page-link')}</Link></div> 
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 publicaton2-col-inner-col2">
                        <div className="reg-text">
                        <h3>{t('journal-menu-publications')}</h3>
                         <h3>01/01/09</h3>
                     </div>
                    <div className="publication4-img-div"><img className='publication4-img' src={publcation4} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-publications2-para')}</p>
                     <Link to="/Publications4" className='publication4-link'>{t('journal-detail-page-link')}</Link>
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

export default Publications