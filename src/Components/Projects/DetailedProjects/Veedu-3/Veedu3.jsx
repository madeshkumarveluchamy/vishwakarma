import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Veedu3.css';
import NavBar from '../../../Navbar/Navbar';
import Veedu31 from '../DetailProjectpageImages/Veedu3-1.webp';
import Veedu32 from '../DetailProjectpageImages/Veedu3-2.webp';
import Veedu34 from '../DetailProjectpageImages/Veedu3-4.webp';
import Veedu35 from '../DetailProjectpageImages/Veedu3-5.webp';
import Veedu36 from '../DetailProjectpageImages/Veedu3-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-41.webp'
import otherproject2 from '../../Project-images/P-42.webp'
import otherproject3 from '../../Project-images/P-43.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const  Veedu3 = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Veedu31' src={Veedu31} alt="" />
       <LazyLoadImage className='Veedu32' src={Veedu32} alt="" />
      </div>
      <div className="second-container-detailpage-Veedu3">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Veedu34' src={ Veedu34} alt="" />
        <LazyLoadImage className='Veedu35' src={ Veedu35} alt="" />
        <LazyLoadImage className='Veedu36' src={ Veedu36} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('veedu3')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('veedu3-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('veedu3-year')}</h6>
            {/* <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('veedu3-area')}</h6> */}
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('veedu3-Location')}</h6>
            {/* <p>{t('veedu3-para')}</p> */}
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/41"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/42"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/43"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default  Veedu3;



