import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Malli.css';
import NavBar from '../../../Navbar/Navbar';
import Malli1 from '../DetailProjectpageImages/Malli1.webp';
import Malli2 from '../DetailProjectpageImages/Malli2.webp';
import Malli4 from '../DetailProjectpageImages/Malli4.webp';
import Malli5 from '../DetailProjectpageImages/Malli5.webp';
import Malli6 from '../DetailProjectpageImages/Malli6.webp';
import Malli7 from '../DetailProjectpageImages/malli7.webp';
import Malli8 from '../DetailProjectpageImages/malli8.webp';
import Malli9 from '../DetailProjectpageImages/malli9.webp';
import Malli10 from '../DetailProjectpageImages/malli10.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P2.webp'
import otherproject2 from '../../Project-images/P23.webp'
import otherproject3 from '../../Project-images/P9.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Malli = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Malli1' src={Malli1} alt="" />
       <LazyLoadImage className='Malli2' src={Malli2} alt="" />
      </div>
      <div className="second-container-detailpage-Malli">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Malli4' src={Malli4} alt="" />
        <LazyLoadImage className='Malli5' src={Malli5} alt="" />
        <LazyLoadImage className='Malli6' src={Malli6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Malli7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Malli8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Malli9}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Malli10}
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
            <h2>{t('malli')} </h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('malli-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('malli-year')}</h6>
            {/* <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('malli-area')}</h6> */}
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('malli-Location')}</h6>
            <p>{t('malli-para')}
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
                <Link to="/project/2"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/23"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/9"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Malli;



