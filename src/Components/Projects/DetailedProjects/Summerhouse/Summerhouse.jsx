import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Summerhouse.css';
import NavBar from '../../../Navbar/Navbar';
import summerhouse1 from '../DetailProjectpageImages/summerhouse1.webp';
import summerhouse2 from '../DetailProjectpageImages/summerhouse2.webp';
import summerhouse4 from '../DetailProjectpageImages/summer4.webp';
import summerhouse5 from '../DetailProjectpageImages/summerhouse5.webp';
import summerhouse6 from '../DetailProjectpageImages/summer6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P4.webp'
import otherproject2 from '../../Project-images/P5.webp'
import otherproject3 from '../../Project-images/P6.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';
import summerhouse7 from '../DetailProjectpageImages/summerhouse7.webp'
import summerhouse8 from '../DetailProjectpageImages/summerhouse8.webp'
import summerhouse9 from '../DetailProjectpageImages/summerhouse9.webp'
import summerhouse10 from '../DetailProjectpageImages/summerhouse10.webp'
import summerhouse11 from '../DetailProjectpageImages/summerhouse11.webp'

const Summerhouse = () => {
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
       <LazyLoadImage className='Summerhouse1' src={summerhouse1} alt="" />
       <LazyLoadImage className='Summerhouse2' src={summerhouse2} alt="" />
      </div>
      <div className="second-container-detailpage-summerhouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Summerhouse4' src={summerhouse4} alt="" />
        <LazyLoadImage className='Summerhouse5' src={summerhouse5} alt="" />
        <LazyLoadImage className='Summerhouse6' src={summerhouse6} alt="" />
      </div>
      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={summerhouse7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={summerhouse8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={summerhouse10}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={summerhouse11}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={summerhouse9}
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
            <h2>{t('summerhouse')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('summerhouse-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('summerhouse-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('summerhouse-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('summerhouse-Location')}</h6>
            <p>{t('summerhouse-para')}
            </p>
            <p>{t('summerhouse-para2')}
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
                <Link to="/project/4"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/5"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/6"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Summerhouse;



