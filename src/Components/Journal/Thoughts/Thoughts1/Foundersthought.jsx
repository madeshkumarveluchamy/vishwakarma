import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Foundersthought.css'
import Foundersthought1 from './images/thoughts1.webp'
import { useTranslation } from 'react-i18next'; 

const Foundersthought = () => {
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
                        <h3>{t('journal-thought1-head-founderthought')}</h3>
                         <h3>15/06/24</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Foundersthought2">
          <div className="row Foundersthought-container2-row">
            <div className="col-8 Foundersthought-container2-col2"><h1>{t('journal-thought1-head-founderthought')}</h1></div>
            {/* <div className="col-4 Foundersthought-container2-col2"><img src={Foundersthought2} alt="" srcset="" /></div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Foundersthought3">
          <div className="row Foundersthought-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Foundersthought-container3-col1"><img src={Foundersthought1} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Foundersthought-container3-col2">
              
                <h2 className='mt-2 inner-head'>{t('journal-thought1-head-founderthought')}</h2>
                <div className="row">
                    <div className="col"><p className='mt-2'>{t('journal-thought1-para1')}</p>
                    <p className='mt-2'>{t('journal-thought1-para2')}</p>
                    <p className='mt-2'>{t('journal-thought1-para3')}</p>
                    </div>
                    <div className="col">
                        <p className='mt-2'>{t('journal-thought1-para4')}</p>
                        <p className='mt-2'>{t('journal-thought1-para5')} </p>
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

export default Foundersthought