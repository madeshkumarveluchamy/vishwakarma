import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Foaid.css'
import Foaid1 from './images/IMG_0345.jpg'
import Foaid2 from './images/IMG_0336.png'
import Foaid3 from './images/IMG_0113.jpg'
import { useTranslation } from 'react-i18next'; 

const Foaid = () => {
    const { t, i18n } = useTranslation('global');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
        <NavBar className="project-custom-navbar" />
      <div className="top-text">
        <div className="journal-menu"><Link to="/Journal">{t('journal-menu-all')},</Link> <Link to="/Thoughts">{t('journal-menu-thoughts')},</Link> <Link to="/Recognitions">{t('journal-menu-recognitions')},</Link>  <Link to="/Publications">{t('journal-menu-publications')},</Link> <Link to="/Planning">{t('journal-menu-planning')},</Link> <Link to="/Design">{t('journal-menu-design')}</Link>  </div>
        <h2 className="journal">{t('journal-menu-head')}</h2>
      </div>
      {/* ............................................... Main Container .............................................................. */}
      <div className="container-fluid">
      <div className="inner-container-interiorexterior">
        <div className="reg-text interiorexterior-headtext">
                        <h3>{t('journal-recognitions3-head-foaid')}</h3>
                         <h3>03/06/24</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Foaid2">
          <div className="row Foaid-container2-row">
            <div className="col-8 Foaid-container2-col1">{t('journal-recognitions3-head-foaid')}</div>
            <div className="col-4 Foaid-container2-col2"><img src={Foaid1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Foaid3">
          <div className="row Foaid-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Foaid-container3-col1"><img src={Foaid1} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Foaid-container3-col2">
              
                <h2 className='mt-2 inner-head'>{t('journal-recognitions3-head-foaid')}</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 journal-para"><p className='mt-2'>{t('journal-recognitions3-para1')}
                        </p>
                        <p className='mt-2'> {t('journal-recognitions3-para2')}
                    </p>
                    <p className='mt-2'>{t('journal-recognitions3-para3')}</p>
                        </div>
                    <div className="col">
                    
                    </div>
                </div>
                
                {/* <img className='mt-2' src={Foaid2} alt="" srcset="" /> */}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foaid