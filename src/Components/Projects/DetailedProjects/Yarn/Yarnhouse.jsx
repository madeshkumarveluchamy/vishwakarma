import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Yarnhouse.css';
import NavBar from '../../../Navbar/Navbar';
import yarn1 from '../DetailProjectpageImages/yarnhouse1.webp';
import yarn2 from '../DetailProjectpageImages/yarn2.webp';
import yarn4 from '../DetailProjectpageImages/yarn4.webp';
import yarn5 from '../DetailProjectpageImages/yarn5.webp';
import yarn6 from '../DetailProjectpageImages/yarnhouse6.webp';
import yarn7 from '../DetailProjectpageImages/yarn7.webp';
import yarn8 from '../DetailProjectpageImages/yarn8.webp';
import yarn9 from '../DetailProjectpageImages/yarn9.webp';
import yarn10 from '../DetailProjectpageImages/yarn10.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P6.webp'
import otherproject2 from '../../Project-images/P7.webp'
import otherproject3 from '../../Project-images/P8.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Yarnhouse = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Yarnhouse1' src={yarn1} alt="" />
       <LazyLoadImage className='Yarnhouse2' src={yarn2} alt="" />
      </div>
      <div className="second-container-detailpage-Yarnhouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Yarnhouse4' src={yarn4} alt="" />
        <LazyLoadImage className='Yarnhouse5' src={yarn5} alt="" />
        <LazyLoadImage className='Yarnhouse6' src={yarn6} alt="" />
      </div>
      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={yarn7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={yarn8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={yarn9}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={yarn10}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
             <h2>{t('yarnhouse')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('yarnhouse-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('yarnhouse-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('yarnhouse-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('yarnhouse-Location')}</h6>
            <p>{t('yarnhouse-para')}
            </p>
            <p>{t('yarnhouse-para2')}
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
                <Link to="/project/6"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/7"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/8"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Yarnhouse;



