import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Balledoftime.css';
import NavBar from '../../../Navbar/Navbar';
import balledoftime1 from '../DetailProjectpageImages/balledoftime1.webp';
import balledoftime2 from '../DetailProjectpageImages/balledoftime2.webp';
import balledoftime4 from '../DetailProjectpageImages/balledoftime4.webp';
import balledoftime5 from '../DetailProjectpageImages/balledoftime5.webp';
import balledoftime6 from '../DetailProjectpageImages/balledoftime6.webp';
import balledoftime7 from '../DetailProjectpageImages/balledoftime7.webp';
import balledoftime8 from '../DetailProjectpageImages/balledoftime8.webp';
import balledoftime9 from '../DetailProjectpageImages/balledoftime9.webp';
import balledoftime10 from '../DetailProjectpageImages/balledoftime10.webp';
import balledoftime11 from '../DetailProjectpageImages/balledoftime11.webp';
import balledoftime12 from '../DetailProjectpageImages/balledoftime12.webp';
import balledoftime13 from '../DetailProjectpageImages/balledoftime13.webp';
import balledoftime14 from '../DetailProjectpageImages/balledoftime14.webp';
import balledoftime15 from '../DetailProjectpageImages/balledoftime15.webp';
import balledoftime16 from '../DetailProjectpageImages/balledoftime16.webp';
import balledoftime17 from '../DetailProjectpageImages/balledoftime17.webp';
import balledoftime18 from '../DetailProjectpageImages/balledoftime18.webp';
import balledoftime19 from '../DetailProjectpageImages/balledoftime19.webp';
import balledoftime20 from '../DetailProjectpageImages/balledoftime20.webp';
import balledoftime21 from '../DetailProjectpageImages/balledoftime21.webp';


import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P24.webp';
import otherproject2 from '../../Project-images/P25.webp';
import otherproject3 from '../../Project-images/P26.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Balledoftime = () => {
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
       <LazyLoadImage className='balledoftime1' src={balledoftime1} alt="" />
       <LazyLoadImage className='balledoftime2' src={balledoftime2} alt="" />
      </div>
      <div className="second-container-detailpage-balledoftime">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='balledoftime4' src={balledoftime4} alt="" />
        <LazyLoadImage className='balledoftime5' src={balledoftime5} alt="" />
        <LazyLoadImage className='balledoftime6' src={balledoftime6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime9}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime10}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime11}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime12}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime13}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime14}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime15}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime16}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime17}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime18}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime19}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime20}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={balledoftime21}
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
            <h2>{t('balledoftime')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('balledoftime-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('balledoftime-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('balledoftime-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('balledoftime-Location')}</h6>
            <p>{t('balledoftime-para1')}
            </p>
            <p>{t('balledoftime-para2')}
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

export default Balledoftime;



