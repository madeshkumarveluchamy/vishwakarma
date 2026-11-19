import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Wade.css'
import Wade1 from './Images/0I5A3721.webp'
import Wade2 from './Images/0I5A3714.jpg'
import Wade3 from './Images/0I5A3712 (1).jpg'
import Wade4 from './Images/Recognition4.jpg'
import { useTranslation } from 'react-i18next'

const Wade = () => {
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
                        <h3>{t('journal-recognitions4-head-wade')}</h3>
                         <h3>01/09/24</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Wade2">
          <div className="row Wade-container2-row">
            <div className="col-8 Wade-container2-col1">{t('journal-recognitions4-head-wade')}</div>
            <div className="col-4 Wade-container2-col2"><img src={Wade1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Wade3">
          <div className="row Wade-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Wade-container3-col1"><img  src={Wade4} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Wade-container3-col2">
              
                <h2 className='mt-2 inner-head'>{t('journal-recognitions4-head-wade')}</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6"><p className='mt-2'>{t('journal-recognitions4-para1')}

                        </p>
                        <p className='mt-1'>{t('journal-recognitions4-para2')} </p>
                        <p className='mt-1'>{t('journal-recognitions4-para3')}</p>
                        <p className='mt-2'>{t('journal-recognitions4-para4')}</p>
                    <p className='mt-2'>{t('journal-recognitions4-para5')}</p>
                    <p className='mt-2'>{t('journal-recognitions4-para6')}</p>
                        </div>
                    <div className="col">
                      <img className='w-100' src={Wade2} alt="" srcset="" />
                      <img className='w-100 wade-last-img' src={Wade3} alt="" srcset="" />
                    </div>
                </div>
                
                {/* <img className='mt-2' src={Wade2} alt="" srcset="" /> */}
                
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Wade