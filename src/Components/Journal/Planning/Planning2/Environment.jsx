import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Environment.css'
import environment1 from './Images/_F6B2166.webp'
import environment2 from './Images/H-10.webp'
import environment3 from './Images/planning3.jpg'
import { useTranslation } from 'react-i18next'

const Environment = () => {
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
                        <h3>{t('journal-planning2-head1')}</h3>
                         <h3>18/04/23</h3>
                     </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Artisanaldesign2">
          <div className="row Environment-container2-row">
            <div className="col-8 Environment-container2-col1">{t('journal-planning2-head1')}</div>
            <div className="col-4 Environment-container2-col2"><img src={environment1} alt="" srcset="" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="inner-container-Artisanaldesign3">
          <div className="row Environment-container2-row">
            <div className="col-12 col-sm-12 col-md-5 Environment-container3-col1"><img src={environment2} alt="" srcset="" /></div>
            <div className="col-12 col-sm-12 col-md-7 Environment-container3-col2">
              
                <h2 className='mt-2 inner-head-avinashi inner-head'>{t('journal-planning2-head1')}</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 journal-para"><p className='mt-2'>{t('journal-planning2-para2')}
                    </p>
                    <p className='mt-1'>{t('journal-planning2-para3')}</p>
                    <p className='mt-1'>{t('journal-planning2-para4')}</p>
                    <p className='mt-1'>{t('journal-planning2-para5')}</p>
                                        </div>
                    <div className="col journal-para">
                    <p className='mt-2'>{t('journal-planning2-para6')} 
                  
                </p>
                <img className=' w-100' src={environment3} alt="" srcset="" /> 
                </div>
                </div>
                
                {/* */}
                
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Environment