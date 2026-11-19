import React, { useEffect }  from 'react'
import NavBar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import "./Recognitions.css"
import recognition1 from './Images/Recognitions1.webp'
import recognition3 from './Images/Recognitions2.webp'
import recognition4 from './Images/Recognition4.webp'
import recognition2 from './Images/IMG_0336.png'
// import publcation4 from './images/Publication4.webp'
import { useTranslation } from 'react-i18next'

const Recognitions = () => {
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
      <div className="container-fluid Recognitions-main-container">
              <div className="inner-container-Recognitions">
                <div className="row Recognitions-first-row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-7 inner-first-col-Recognitions">
                      <div className="reg-text">
                        <h3>{t('journal-menu-recognitions')}</h3>
                         <h3>18/04/23</h3>
                     </div>
                     <img className='Recognitions1-img' src={recognition1} alt="" srcset="" />
                     <div className='Recognitions1-para-div'><p>{t('journal-mainpage-recognitions3-para')}</p></div>
                     <div className='avinashilingam-link-div'><Link to="/Recognitions1" className='Recognitions1-link'>{t('journal-detail-page-link')}</Link></div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 inner-second-col-Recognitions">
                    <div className="reg-text">
                        <h3>{t('journal-menu-recognitions')}</h3>
                         <h3>03/06/24</h3>
                     </div>
                    <div className='Recognitions2-img-div'><img className='Recognitions2-img' src={recognition2} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-recognitions1-para')}</p>
                     <Link to="/Recognitions3" className='Recognitions2-link'>{t('journal-detail-page-link')}</Link>
                     <div className="row Recognitions2-col-inner-row">
                        <div className="col-12 col-sm-12 col-md-6 Recognitions2-col-inner-col1">
                        <div className="reg-text">
                        <h3>{t('journal-menu-recognitions')}</h3>
                         <h3>09/08/23</h3>
                     </div>
                     <div className="Recognitions3-img-div"><img className='Recognitions3-img' src={recognition3} alt="" srcset="" /></div>
                     <p>{t('journal-mainpage-recognitions2-para')}</p>
                     <div className="recognition3-link-div"><Link to="/Recognitions2" className='Recognitions3-link'>{t('journal-detail-page-link')}</Link></div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 Recognitions2-col-inner-col2">
                        <div className="reg-text">
                        <h3>{t('journal-menu-recognitions')}</h3>
                         <h3>01/09/24</h3>
                     </div>
                    <div className="Recognitions4-img-div"><img className='Recognitions4-img' src={recognition4} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-recognitions4-para')}</p>
                     <Link to="/Recognitions4" className='Recognitions4-link'>{t('journal-detail-page-link')}</Link>
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

export default Recognitions