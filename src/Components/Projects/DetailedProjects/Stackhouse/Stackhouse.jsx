import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Stackhouse.css';
import NavBar from '../../../Navbar/Navbar';
import stack1 from '../DetailProjectpageImages/stack1.webp';
import stack2 from '../DetailProjectpageImages/Stackhouse2.webp';
import stack4 from '../DetailProjectpageImages/stackhouse4.webp';
import stack5 from '../DetailProjectpageImages/Stackhoouse5.webp';
import stack6 from '../DetailProjectpageImages/stack6.webp';
import stack7 from '../DetailProjectpageImages/Stackhouse7.webp';
import stack8 from '../DetailProjectpageImages/Stackhouse8.webp';
import stack9 from '../DetailProjectpageImages/Stackhouse9.webp';
import stack10 from '../DetailProjectpageImages/Stackhouse10.webp';
import stack11 from '../DetailProjectpageImages/Stackhouse11.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P12.webp'
import otherproject2 from '../../Project-images/project17.webp'
import otherproject3 from '../../Project-images/project18.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Stackhouse = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Stackhouse1' src={stack1} alt="" />
       <LazyLoadImage className='Stackhouse2' src={stack2} alt="" />
      </div>
      <div className="second-container-detailpage-stackhouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Stackhouse4' src={stack4} alt="" />
        <LazyLoadImage className='Stackhouse5' src={stack5} alt="" />
        <LazyLoadImage className='Stackhouse6' src={stack6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={stack7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={stack8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={stack9}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={stack10}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={stack11}
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
            <h2>{t('stackhouse')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('stackhouse-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('stackhouse-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('stackhouse-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('stackhouse-Location')}</h6>
            <p>{t('stackhouse-para')}
            </p>
            <p>{t('stackhouse-para2')}
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
                <Link to="/project/12"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/17"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/18"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Stackhouse;



