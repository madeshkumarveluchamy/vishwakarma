import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Functionality.css'
import Functionality1 from './images/DSC01258-HDR.jpg'
import Functionality3 from './images/thoughts2-img2.jpg'
// import Functionality2 from './images/DSC01261.webp'
// import Functionality4 from './images/DSC01398.webp'
import Functionality5 from './images/DSC01399.webp'
// import Functionality6 from './images/DSC01415.webp'
// import Functionality7 from './images/DSC01530.webp'
// import Functionality8 from './images/DSC01531.webp'
import { useTranslation } from 'react-i18next'; 

const Functionality = () => {
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
                        <h3>{t('journal-thought2-head-functionality')}</h3>
                         <h3>14/04/24</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Functionality2">
          <div className="row Functionality-container2-row">
            <div className="col-8 Functionality-container2-col1">{t('journal-thought2-head-functionality')} </div>
            <div className="col-4 Functionality-container2-col2"><img src={Functionality1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Functionality3">
          <div className="row Functionality-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Functionality-container3-col1"><img src={Functionality3} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Functionality-container3-col2">
              
                <h2 className='mt-2 inner-head'>{t('journal-thought2-head-functionality')} </h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                      <p className='mt-2'>{t('journal-thought2-para1')}</p>
                      <p className=''>{t('journal-thought2-para2')}</p>
                        <p>{t('journal-thought2-para3')} </p>
                    {/* <img className='functoinality3-img' src={Functionality3} alt="" srcset="" /> */}
                    </div>
                    <div className="col">
                       
                        <img className='w-100 staircase-last-img' src={Functionality5} alt="" srcset="" />
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

export default Functionality