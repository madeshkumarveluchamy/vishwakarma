import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Lighthouse.css';
import NavBar from '../../../Navbar/Navbar';
import light1 from '../DetailProjectpageImages/lighthouse1.webp';
import light2 from '../DetailProjectpageImages/lighthouse2.webp';
import light4 from '../DetailProjectpageImages/lighthouse4.webp';
import light5 from '../DetailProjectpageImages/lighthouse5.webp';
import light6 from '../DetailProjectpageImages/lighthouse6.webp';
import light7 from '../DetailProjectpageImages/lighthouse7.webp';
import light8 from '../DetailProjectpageImages/lighthouse8.webp';
import light9 from '../DetailProjectpageImages/lighthouse9.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P8.webp';
import otherproject2 from '../../Project-images/P12.webp';
import otherproject3 from '../../Project-images/project17.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';
const Lighthouse = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Lighthouse1' src={light1} alt="" />
       <LazyLoadImage className='Lighthouse2' src={light2} alt="" />
      </div>
      <div className="second-container-detailpage-Lighthouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Lighthouse4' src={light4} alt="" />
        <LazyLoadImage className='Lighthouse5' src={light5} alt="" />
        <LazyLoadImage className='Lighthouse6' src={light6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={light7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={light8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={light9}
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
            <h2>{t('lighthouse')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('lighthouse-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('lighthouse-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('lighthouse-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('lighthouse-Location')}</h6>
            <p>{t('lighthouse-para')}
            </p>
            <p>{t('lighthouse-para2')}
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
                <Link to="/project/8"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/12"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/17"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Lighthouse;



