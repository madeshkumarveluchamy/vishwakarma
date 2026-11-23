import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Elgi.css';
import NavBar from '../../../Navbar/Navbar';
import elgi1 from '../DetailProjectpageImages/Elgi1.webp';
import elgi2 from '../DetailProjectpageImages/Elgi2.webp';
import elgi4 from '../DetailProjectpageImages/Elgi4.webp';
import elgi5 from '../DetailProjectpageImages/Elgi5.webp';
import elgi6 from '../DetailProjectpageImages/Elgi6.webp';
import elgi7 from '../DetailProjectpageImages/Elgi7.webp';
import elgi8 from '../DetailProjectpageImages/Elgi8.webp';
import elgi9 from '../DetailProjectpageImages/Elgi9.webp';
import elgi10 from '../DetailProjectpageImages/Elgi10.webp';
import elgi11 from '../DetailProjectpageImages/Elgi11.webp';
import elgi12 from '../DetailProjectpageImages/Elgi12.webp';
import elgi13 from '../DetailProjectpageImages/Elgi13.webp';

import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P24.webp';
import otherproject2 from '../../Project-images/P25.webp';
import otherproject3 from '../../Project-images/P26.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Elgi = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Elgi1' src={elgi1} alt="" />
       <LazyLoadImage className='Elgi2' src={elgi2} alt="" />
      </div>
      <div className="second-container-detailpage-Elgi">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Elgi4' src={elgi4} alt="" />
        <LazyLoadImage className='Elgi5' src={elgi5} alt="" />
        <LazyLoadImage className='Elgi6' src={elgi6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={elgi7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={elgi8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={elgi9}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={elgi10}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={elgi11}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={elgi12}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={elgi13}
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
            <h2>{t('egli')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('egli-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('egli-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('egli-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('egli-Location')}</h6>
            <p>{t('egli-para')}
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
                <Link to="/project/24"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/25"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/26"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Elgi;



