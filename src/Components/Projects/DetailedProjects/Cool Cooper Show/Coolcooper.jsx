import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Coolcooper.css';
import NavBar from '../../../Navbar/Navbar';
import Coolcooper1 from '../DetailProjectpageImages/coolcooper1.webp';
import Coolcooper2 from '../DetailProjectpageImages/coolcooper2.webp';
import Coolcooper4 from '../DetailProjectpageImages/coolcooper4.webp';
import Coolcooper5 from '../DetailProjectpageImages/coolcooper5.webp';
import Coolcooper6 from '../DetailProjectpageImages/coolcooper6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P49.webp'
import otherproject2 from '../../Project-images/P50.webp'
import otherproject3 from '../../Project-images/P51.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Coolcooper = () => {
  const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Coolcooper1' src={Coolcooper1} alt="" />
       <LazyLoadImage className='Coolcooper2' src={Coolcooper2} alt="" />
      </div>
      <div className="second-container-detailpage-Coolcooper">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Coolcooper4' src={Coolcooper4} alt="" />
        <LazyLoadImage className='Coolcooper5' src={Coolcooper5} alt="" />
        <LazyLoadImage className='Coolcooper6' src={Coolcooper6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('coolcooper')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('coolcooper-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('coolcooper-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('coolcooper-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('coolcooper-Location')}</h6>
            <p>{t('coolcooper-para')}
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
                <Link to="/project/49"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/50"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/51"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Coolcooper;



