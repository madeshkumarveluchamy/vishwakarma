import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/Navbar'
import "./Journal.css";
import thoughts1 from './Thoughts/images/thoughts1.webp'
import recognitions2 from './Recognitions/Images/Recognitions2.webp'
import turyalogo from './journalimages/Turya-logo.png'
import award1 from './journalimages/award.jpg'
import summerhouse from './journalimages/k (19).jpg'
import thoughts2 from './journalimages/thoughts3.jpg'
import thoughts4 from './Thoughts/images/thoughts4.webp'
import publications1 from './journalimages/Publication1.jpg'
import publications2 from './journalimages/Publicarion2.jpg'
import publications3 from './Publications/images/Publication3.webp'
import publications4 from './Publications/images/Publication4.webp'
import recognitions4 from './Recognitions/Images/Recognitions1.webp'
import sketch from './journalimages/2 (2).png'
import sketch2 from './journalimages/handsketch-1.png'

import Recognition4 from './Recognitions/Images/Recognition4.webp'
import { useTranslation } from 'react-i18next';


const Journal = () => {
  const { t, i18n } = useTranslation('global');

  const [seeMoreVisible, setSeeMoreVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSeeMoreClick = () => {
    setSeeMoreVisible(!seeMoreVisible);
  };
  return (
   
 <>
    <NavBar className="project-custom-navbar" />
    <div className={`journal-root ${i18n.language === 'ta' ? 'tamil-language' : ''}`}>

      <div className="top-text">
        
        <div className="journal-menu"><Link to="">{t('journal-menu-all')},</Link> <Link to="/Thoughts">{t('journal-menu-thoughts')},</Link> <Link to="/Recognitions">{t('journal-menu-recognitions')},</Link>  <Link to="/Publications">{t('journal-menu-publications')},</Link> <Link to="/Planning">{t('journal-menu-planning')},</Link> <Link to="/Design">{t('journal-menu-design')}</Link>  </div>
        <h2 className="journal">{t('journal-menu-head')}</h2>
      </div>
      <div className="journal-main-container">
       
      <div className="inner-container-Thoughts">
               <div className="row">
               <div className="col-12 col-sm-12 col-md-12 col-lg-7 inner-first-col-Thoughts">
                      <div className="reg-text">
                        <h3>{t('journal-menu-thoughts')}</h3>
                         <h3>15/06/24</h3>
                     </div>
                     <img className='Thoughts1-img' src={thoughts1} alt="" srcset="" />
                   <div className='thoughts1-para'> <p >{t('journal-mainpage-thought1-para')}</p></div> 
                     <Link to="/Thoughts1" className='readmore-link'>{t('journal-detail-page-link')}</Link>

                     <div className="row Thoughts2-col-inner-row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 journal-main-first-col-in-row-col1">
                        <div className="reg-text reg-text-small-col">
                        <h3>{t('journal-menu-recognitions')}</h3>
                         <h3>03/06/24</h3>
                     </div>
                    <div className='thoughts3-img-div'><img className='Thoughts3-img' src={award1} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-recognitions1-para')}</p>
                     <Link to="/Recognitions3" className='readmore-link'>{t('journal-detail-page-link')}</Link>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 genusloci-col">
                        <div className="reg-text reg-text-small-col">
                        <h3>{t('journal-menu-thoughts')}</h3>
                         <h3>03/06/24</h3>
                     </div>
                     <div className='thougts4-img-div'><img className='journal-thoughts3-img' src={summerhouse} alt="" srcset="" /></div>
                     <p>{t('journal-mainpage-thought2-para')}</p>
                    <div className="genusloci-linkdiv"><Link to="/Thoughts3" className='readmore-link genusloci-link'>{t('journal-detail-page-link')}</Link></div> 
                        </div>
                     </div>
                    </div>
                    
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 inner-second-col-journal-summer">
                      <div className="row inner-second-col-Thoughts-first-row summer-row">
                      <div className="reg-text ">
                        <h3>{t('journal-menu-publications')}</h3>
                         <h3>20/05/23</h3>
                     </div>
                    <div className='thoughts2-div'><img className='summerhouse-journal-img' src={publications3} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-publications1-para')}</p>
                     <Link to="/Publications3" className='journal-summer-house-link readmore-link'>{t('journal-detail-page-link')}</Link>
                      </div>
                    
                     <div className="row Thoughts2-col-inner-row">
                     
                     <h2 className="jounal-text-head-1">{t('journal-mainpage-text-head1')}<br></br><br></br>{t('journal-mainpage-text-head2')}</h2>
                     </div>
                     <div className="row Thoughts2-col-inner-row">
                        <div className="col-12 col-sm-12 col-md-6 ">
                        <div className="reg-text reg-text-small-col">
                   
                         <h3>09/08/23</h3>
                     </div>
                    <div className='thoughts3-img-div'><img className='Thoughts3-img' src={recognitions2} alt="" srcset="" /></div> 
                     <p>{t('journal-mainpage-recognitions2-para')}</p>
                     <div className="recognitionlink-2-div"><Link to="/Recognitions2" className='readmore-link recognitionlink-2'>{t('journal-detail-page-link')}</Link></div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 journal-main-first-col-in-row-col2">
                        <div className="reg-text reg-text-small-col">
                       
                         <h3>13/06/24</h3>
                     </div>
                     <div className='thougts4-img-div'><img className='Thoughts4-img' src={turyalogo} alt="" srcset="" /></div>
                     <p>{t('journal-mainpage-turya1-para')} </p>
                     <div className="turya-link-div"><Link to="/Turya" className='readmore-link '>{t('journal-detail-page-link')}</Link></div>
                        </div>
                     </div>
                     
                    </div>
               
              </div>
             
      
              <div className="row second-main-row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <div className="row journal-head-row"><h2 className="jounal-text-head-2">{t('journal-mainpage-text2-head1')}</h2></div>
                <div className="row"> <div className="reg-text ">
                        <h3>{t('journal-menu-publications')}</h3>
                         <h3>01/01/09</h3>
                     </div>
                    <div className='thoughts2-div'><img className='Thoughts2-img mt-4' src={publications4} alt="" srcset="" /></div> 
                     <p className="mt-4">{t('journal-mainpage-publications2-para')}</p>
                     <div className="century-link-div"><Link to="/Publications4" className='century-link readmore-link'>{t('journal-detail-page-link')}</Link></div></div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 second-main-col-in-sec-col sketch-col">
              <div className="row"> 
                <div className="reg-text ">
                        <h3>{t('journal-menu-design')}</h3>
                         <h3>01/06/16</h3>
                     </div>
                    <div className='thoughts2-div'><img className='sketchimg1 mt-4' src={sketch} alt="" srcset="" /></div> 
                    <div className='thoughts2-div'><img className='sketchimg2 mt-4' src={sketch2} alt="" srcset="" /></div> 
                     <p className="mt-4">{t('journal-mainpage-design1-para')}</p>
                    <div className="sketch-link-div"></div> <Link to="/Handsketch" className='readmore-link'>{t('journal-detail-page-link')}</Link></div>
              </div>
             </div>
      <div className="row" id="seemore-row1" style={{ display: seeMoreVisible ? 'flex' : 'none' }}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 journal-extra-col1">
        <div className="reg-text">
              <h3>{t('journal-menu-thoughts')}</h3>
              <h3>14/04/24</h3>
            </div>
          <div className="sketch-main"><img className="thoughts2-img-seemore mt-4" src={thoughts2} alt="" /></div>
            <p className="mt-4">
            {t('journal-mainpage-thought3-para')}
            </p>
           <div className="staircase-link-div"> <Link to="/Thoughts2" className='readmore-link'>{t('journal-detail-page-link')}</Link></div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 journal-extra-col2"> <div className="reg-text">
              <h3>{t('journal-menu-publications')}</h3>
              <h3>12/01/07</h3>
            </div>
          <div className="sketch-main"><img className="publications1-img-seemore mt-4" src={publications1} alt="" /></div>
            <p className="mt-4 publication-main-coimbatore">
            {t('journal-mainpage-publications3-para')}
            </p>
           <div className="shreyahome-div"><Link to="/Publications1" className='readmore-link'>{t('journal-detail-page-link')}</Link></div> 
            </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 journal-extra-col3"> <div className="reg-text">
              <h3>{t('journal-menu-recognitions')}</h3>
              <h3>18/04/23</h3>
            </div>
          <div className="sketch-main"><img className="recognitions1-img-seemore mt-4" src={recognitions4} alt="" /></div>
            <p className="mt-4">
            {t('journal-mainpage-recognitions3-para')}
            </p>
            <div className="avinashilingams-link-div"><Link to="/Recognitions1" className='readmore-link'>{t('journal-detail-page-link')}</Link></div>
            </div>
      </div>

      <div className="row" id="seemore-row2" style={{ display: seeMoreVisible ? 'flex' : 'none' }}> 
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 journal-extra-col4"> <div className="reg-text">
              <h3>{t('journal-menu-publications')}</h3>
              <h3>10/07/24</h3>
            </div>
          <div className="sketch-main"><img className="publications1-img-seemore mt-4" src={publications2} alt="" /></div>
            <p className="mt-4">
            {t('journal-mainpage-publications4-para')}
            </p>
            <div className="lighthouse-link-div"> <Link to="/Publications2" className='readmore-link'>{t('journal-detail-page-link')}</Link></div>
            </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 journal-extra-col5"> 
          <div className="reg-text">
              <h3>{t('journal-menu-thoughts')}</h3>
              <h3>10/03/24</h3>
            </div>
          <div className="sketch-main"><img className="recognitions1-img-seemore mt-4" src={thoughts4} alt="" /></div>
            <p className="mt-4">
            {t('journal-mainpage-thought4-para')}
            </p>
           <div className="materialitylink-div"></div> <Link to="/Thoughts4" className='readmore-link'>{t('journal-detail-page-link')}</Link>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 journal-extra-col6">
              <div className="reg-text">
              <h3>{t('journal-menu-recognitions')}</h3>
              <h3>01/09/24</h3>
            </div>
          <div className="sketch-main"><img className="recognitions1-img-seemore mt-4" src={Recognition4} alt="" /></div>
            <p className="mt-4">
            {t('journal-mainpage-recognitions4-para')}
            </p>
            <div className="wade-link-div"></div><Link to="/Recognitions4" className='readmore-link'>{t('journal-detail-page-link')}</Link>
              </div>
            </div>
            </div>
      </div>
      
           
      </div>
      <div className="inner-seemore-contain">
      <Link to="#" className="seemore-link" onClick={handleSeeMoreClick}>
              <div className="seemore">
                {seeMoreVisible ? t("journal-detail-page-seeless") : t("journal-detail-page-seemore")}
              </div>
            </Link>
      </div>
      </div>
     </div>
    </>
  );
};

export default Journal;