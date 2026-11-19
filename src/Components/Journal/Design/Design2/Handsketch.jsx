import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Handsketch.css'
import Handsketch1 from './Images/handsketch1.jpg'
import Handsketch2 from './Images/handsketch3.JPG'
import Handsketch3 from './Images/handsketch-1.png'
import { useTranslation } from 'react-i18next'; 

const Handsketch = () => {
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
                        <h3>{t('journal-design2-head-handsketch')}</h3>
                         <h3>18/04/23</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Handsketch2">
          <div className="row Handsketch-container2-row">
            <div className="col-8 Handsketch-container2-col1">{t('journal-design2-head-handsketch')}</div>
            <div className="col-4 Handsketch-container2-col2"><img src={Handsketch1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Handsketch3">
          <div className="row Handsketch-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Handsketch-container3-col1"><img src={Handsketch2} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Handsketch-container3-col2">
              
                <h2 className='mt-2 inner-head-avinashi inner-head'>{t('journal-design2-head-handsketch')}</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 journal-para"><p className='mt-2'>{t('journal-design2-para1')}</p>
                    <p className='mt-1'>{t('journal-design2-para2')}
                        </p></div>
                    <div className="col-12 col-sm-12 col-md-5">
                    <img className='mt-2 w-100' src={Handsketch3} alt="" srcset="" />
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

export default Handsketch