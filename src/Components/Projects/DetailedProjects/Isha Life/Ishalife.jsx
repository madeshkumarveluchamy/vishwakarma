import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Ishalife.css';
import NavBar from '../../../Navbar/Navbar';
import Ishalife1 from '../DetailProjectpageImages/Ishalife1.webp';
import Ishalife2 from '../DetailProjectpageImages/Ishalife2.webp';
import Ishalife4 from '../DetailProjectpageImages/Ishalife4.webp';
import Ishalife5 from '../DetailProjectpageImages/Ishalife5.webp';
import Ishalife6 from '../DetailProjectpageImages/Ishalife6.webp';
import Ishalife7 from '../DetailProjectpageImages/Ishalife7.webp';
import Ishalife8 from '../DetailProjectpageImages/Ishalife8.webp';
import Ishalife9 from '../DetailProjectpageImages/Ishalife9.webp';
import Ishalife10 from '../DetailProjectpageImages/Ishalife10.webp';
import Ishalife11 from '../DetailProjectpageImages/Ishalife11.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P52.webp'
import otherproject2 from '../../Project-images/P53.webp'
import otherproject3 from '../../Project-images/P54.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel'

const Ishalife = () => {
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
       <LazyLoadImage className='Ishalife1' src={Ishalife1} alt="" />
       <LazyLoadImage className='Ishalife2' src={Ishalife2} alt="" />
      </div>
      <div className="second-container-detailpage-Ishalife">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Ishalife4' src={Ishalife4} alt="" />
        <LazyLoadImage className='Ishalife5' src={Ishalife5} alt="" />
        <LazyLoadImage className='Ishalife6' src={Ishalife6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ishalife7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ishalife8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ishalife9}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ishalife10}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={Ishalife11}
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
            <h2>{t('ishalife')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('ishalife-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('ishalife-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('ishalife-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('ishalife-Location')}</h6>
            <p>{t('ishalife-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" />{t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/52"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/53"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/54"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Ishalife;



