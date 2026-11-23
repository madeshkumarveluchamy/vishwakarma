import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Villanunc.css';
import NavBar from '../../../Navbar/Navbar';
import villanunc1 from '../DetailProjectpageImages/Villanunc1.webp';
import villanunc2 from '../DetailProjectpageImages/Villanunc2.webp';
import villanunc4 from '../DetailProjectpageImages/Villanunc4.webp';
import villanunc5 from '../DetailProjectpageImages/Villanunc5.webp';
import villanunc6 from '../DetailProjectpageImages/Villanunc6.webp';
import villanunc7 from '../DetailProjectpageImages/Villanunc7.webp';
import villanunc8 from '../DetailProjectpageImages/Villanunc8.webp';
import villanunc9 from '../DetailProjectpageImages/Villanunc9.webp';
import villanunc10 from '../DetailProjectpageImages/Villanunc10.webp';
import villanunc11 from '../DetailProjectpageImages/Villanunc11.webp';
import villanunc12 from '../DetailProjectpageImages/Villanunc12.webp';
import villanunc13 from '../DetailProjectpageImages/Villanunc13.webp';
import villanunc14 from '../DetailProjectpageImages/Villanunc14.webp';
import villanunc15 from '../DetailProjectpageImages/Villanunc15.webp';
import villanunc16 from '../DetailProjectpageImages/Villanunc16.webp';
import villanunc17 from '../DetailProjectpageImages/Villanunc17.webp';
import Carousel from 'react-bootstrap/Carousel';

import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P28.webp'
import otherproject2 from '../../Project-images/P29.webp'
import otherproject3 from '../../Project-images/P30.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Villanunc = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Villanunc1' src={villanunc1} alt="" />
       <LazyLoadImage className='Villanunc2' src={villanunc2} alt="" />
      </div>
      <div className="second-container-detailpage-Villanunc">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Villanunc4' src={villanunc4} alt="" />
        <LazyLoadImage className='Villanunc5' src={villanunc5} alt="" />
        <LazyLoadImage className='Villanunc6' src={villanunc6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc9}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc10}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc11}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc12}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc13}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc14}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc15}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc16}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={villanunc17}
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
             <h2>{t('villanunc')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('villanunc-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('villanunc-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('villanunc-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('villanunc-Location')}</h6>
            <p>{t('villanunc-para')}
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
                <Link to="/project/28"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/29"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/30"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Villanunc;



