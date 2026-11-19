import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Veedu7.css';
import NavBar from '../../../Navbar/Navbar';
import Veedu71 from '../DetailProjectpageImages/Veedu7-1.webp';
import Veedu72 from '../DetailProjectpageImages/Veedu7-2.webp';
import Veedu74 from '../DetailProjectpageImages/Veedu7-4.webp';
import Veedu75 from '../DetailProjectpageImages/Veedu7-5.webp';
import Veedu76 from '../DetailProjectpageImages/Veedu7-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P3.webp'
import otherproject2 from '../../Project-images/P4.webp'
import otherproject3 from '../../Project-images/P5.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Veedu7 = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    const project = galleryItems.find(item => item.id === parseInt(id, 10));
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Veedu71' src={Veedu71} alt="" />
       <LazyLoadImage className='Veedu72' src={Veedu72} alt="" />
      </div>
      <div className="second-container-detailpage-Veedu7">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Veedu74' src={Veedu74} alt="" />
        <LazyLoadImage className='Veedu75' src={Veedu75} alt="" />
        <LazyLoadImage className='Veedu76' src={Veedu76} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
           <h2>{t('veedu7')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('veedu7-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('veedu7-year')}</h6>
            {/* <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('veedu7-area')}</h6> */}
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('veedu7-Location')}</h6>
            {/* <p>{t('veedu7-para')} </p> */}
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" />{t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/3"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/4"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/5"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Veedu7;



