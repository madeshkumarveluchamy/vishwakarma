import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Lnbjewellers.css';
import NavBar from '../../../Navbar/Navbar';
import Lnbjewellers1 from '../DetailProjectpageImages/LNB1.webp';
import Lnbjewellers2 from '../DetailProjectpageImages/LNB2.webp';
import Lnbjewellers4 from '../DetailProjectpageImages/LNB4.webp';
import Lnbjewellers5 from '../DetailProjectpageImages/LNB5.webp';
import Lnbjewellers6 from '../DetailProjectpageImages/LNB6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P25.webp'
import otherproject2 from '../../Project-images/P26.webp'
import otherproject3 from '../../Project-images/P27.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Lnbjewellers = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    const project = galleryItems.find(item => item.id === parseInt(id, 10));
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Lnbjewellers1' src={Lnbjewellers1} alt="" />
       <LazyLoadImage className='Lnbjewellers2' src={Lnbjewellers2} alt="" />
      </div>
      <div className="second-container-detailpage-Lnbjewellers">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Lnbjewellers4' src={Lnbjewellers4} alt="" />
        <LazyLoadImage className='Lnbjewellers5' src={Lnbjewellers5} alt="" />
        <LazyLoadImage className='Lnbjewellers6' src={Lnbjewellers6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('lnbjewellers')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('lnbjewellers-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span>{t('lnbjewellers-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span> {t('lnbjewellers-area')}</h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span> {t('lnbjewellers-Location')}</h6>
            <p>{t('lnbjewellers-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/25"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/26"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/27"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Lnbjewellers;



