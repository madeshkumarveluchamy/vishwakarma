import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Nalanda.css';
import NavBar from '../../../Navbar/Navbar';
import nalanda1 from '../DetailProjectpageImages/nalanda1.webp';
import nalanda2 from '../DetailProjectpageImages/nalanda2.webp';
import nalanda4 from '../DetailProjectpageImages/nalanda4.webp';
import nalanda5 from '../DetailProjectpageImages/nalanda5.webp';
import nalanda6 from '../DetailProjectpageImages/nalanda6.webp';
import nalanda7 from '../DetailProjectpageImages/nalanda7.webp';
import nalanda8 from '../DetailProjectpageImages/nalanda8.webp';
import nalanda9 from '../DetailProjectpageImages/nalanda9.webp';
import nalanda10 from '../DetailProjectpageImages/nalanda10.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P19.webp'
import otherproject2 from '../../Project-images/P20.webp'
import otherproject3 from '../../Project-images/P1.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Nalanda = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Nalanda1' src={nalanda1} alt="" />
       <LazyLoadImage className='Nalanda2' src={nalanda2} alt="" />
      </div>
      <div className="second-container-detailpage-Nalanda">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Nalanda4' src={nalanda4} alt="" />
        <LazyLoadImage className='Nalanda5' src={nalanda5} alt="" />
        <LazyLoadImage className='Nalanda6' src={nalanda6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={nalanda7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={nalanda8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={nalanda9}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={nalanda10}
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
            <h2>{t('nalanda')} </h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('nalanda-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('nalanda-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('nalanda-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('nalanda-Location')}</h6>
            <p>{t('nalanda-para')}
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
                <Link to="/project/19"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/20"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/1"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Nalanda;



