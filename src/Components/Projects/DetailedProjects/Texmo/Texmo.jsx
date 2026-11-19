import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Texmo.css';
import NavBar from '../../../Navbar/Navbar';
import texmo1 from '../DetailProjectpageImages/Texmo1.webp';
import texmo2 from '../DetailProjectpageImages/Texmo2.webp';
import texmo4 from '../DetailProjectpageImages/Texmo4.webp';
import texmo5 from '../DetailProjectpageImages/Texmo5.webp';
import texmo6 from '../DetailProjectpageImages/Texmo6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P14.webp'
import otherproject2 from '../../Project-images/P24.webp'
import otherproject3 from '../../Project-images/P25.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Texmo = () => {
  const { t} = useTranslation('global');
  
    const { id } = useParams();
    const project = galleryItems.find(item => item.id === parseInt(id, 10));
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Texmo1' src={texmo1} alt="" />
       <LazyLoadImage className='Texmo2' src={texmo2} alt="" />
      </div>
      <div className="second-container-detailpage-Texmo">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Texmo4' src={texmo4} alt="" />
        <LazyLoadImage className='Texmo5' src={texmo5} alt="" />
        <LazyLoadImage className='Texmo6' src={texmo6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('texmo')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('texmo-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('texmo-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('texmo-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('texmo-Location')}</h6>
            <p>{t('texmo-para')}
            </p>
            <p>{t('texmo-para2')}
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
                <Link to="/project/14"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/24"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/25"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Texmo;



