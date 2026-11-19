import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Kayal.css';
import NavBar from '../../../Navbar/Navbar';
import kayalfirst1 from '../DetailProjectpageImages/kayalfirst1.webp'
import kayal2 from '../DetailProjectpageImages/kayal2.webp';
import kayal4 from '../DetailProjectpageImages/kayal4.webp';
import kayal5 from '../DetailProjectpageImages/kayal5.webp';
import kayal6 from '../DetailProjectpageImages/kayal6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import kayal7 from '../DetailProjectpageImages/kayal7.webp';
import kayal8 from '../DetailProjectpageImages/kayal8.webp';
import kayal9 from '../DetailProjectpageImages/kayal9.webp';
import kayal10 from '../DetailProjectpageImages/kayal10.webp';
import kayal11 from '../DetailProjectpageImages/kayal11.webp';
import kayal12 from '../DetailProjectpageImages/kayal12.webp';

import otherproject1 from '../../Project-images/P10.webp'
import otherproject2 from '../../Project-images/P19.webp'
import otherproject3 from '../../Project-images/P20.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';


const Kayal = () => {
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
       <LazyLoadImage className='kayalfirst1' src={kayalfirst1} alt="" />
       <LazyLoadImage className='kayal2' src={kayal2} alt="" />
      </div>
      <div className="second-container-detailpage-kayal">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='kayal4' src={kayal4} alt="" />
        <LazyLoadImage className='kayal5' src={kayal5} alt="" />
        <LazyLoadImage className='kayal6' src={kayal6} alt="" />
      </div>
      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={kayal7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={kayal8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={kayal9}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={kayal10}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={kayal11}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={kayal12}
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
            <h2>{t('Kayal')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('Kayal-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('Kayal-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('Kayal-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('Kayal-Location')} </h6>
            <p>{t('Kayal-para')}
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
                <Link to="/project/10"><LazyLoadImage className='other-project-img' src={otherproject1}  alt=''/> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/19"> <LazyLoadImage className='other-project-img' src={otherproject2}  alt=''/>  </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/20"> <LazyLoadImage className='other-project-img' src={otherproject3} alt='' /></Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Kayal;



