import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Ksir.css';
import NavBar from '../../../Navbar/Navbar';
import Ksir1 from '../DetailProjectpageImages/Ksir1.webp'
import Ksir2 from '../DetailProjectpageImages/Ksir2.webp';
import Ksir4 from '../DetailProjectpageImages/Ksir4.webp';
import Ksir5 from '../DetailProjectpageImages/Ksir5.webp';
import Ksir6 from '../DetailProjectpageImages/Ksir6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import Ksir7 from '../DetailProjectpageImages/Ksir7.webp';
import Ksir8 from '../DetailProjectpageImages/Ksir8.webp';
import Ksir9 from '../DetailProjectpageImages/Ksir9.webp';
import Ksir10 from '../DetailProjectpageImages/Ksir10.webp';
import Ksir11 from '../DetailProjectpageImages/Ksir11.webp';
import Ksir12 from '../DetailProjectpageImages/Ksir12.webp';
import Ksir13 from '../DetailProjectpageImages/Ksir13.webp';
import Ksir14 from '../DetailProjectpageImages/Ksir14.webp';
import Ksir15 from '../DetailProjectpageImages/Ksir15.webp';

import otherproject1 from '../../Project-images/P10.webp'
import otherproject2 from '../../Project-images/P19.webp'
import otherproject3 from '../../Project-images/P20.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';


const Ksir = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Ksir1' src={Ksir1} alt="" />
       <LazyLoadImage className='Ksir2' src={Ksir2} alt="" />
      </div>
      <div className="second-container-detailpage-Ksir">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Ksir4' src={Ksir4} alt="" />
        <LazyLoadImage className='Ksir5' src={Ksir5} alt="" />
        <LazyLoadImage className='Ksir6' src={Ksir6} alt="" />
      </div>
      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir9}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir10}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir11}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir12}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir13}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir14}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ksir15}
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
            <h2>{t('ksir')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('ksir-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('ksir-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('ksir-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('ksir-Location')} </h6>
            <p>{t('ksir-para')}
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

export default Ksir;



