import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Springschool.css';
import NavBar from '../../../Navbar/Navbar';
import spring1 from '../DetailProjectpageImages/Springmount1.webp';
import spring2 from '../DetailProjectpageImages/Springmount2.webp';
// import spring3 from '../DetailProjectpageImages/spring3.JPG';
import spring4 from '../DetailProjectpageImages/Springmount4.webp';
import spring5 from '../DetailProjectpageImages/Springmount5.webp';
import spring6 from '../DetailProjectpageImages/Springmount6.webp';
import spring7 from '../DetailProjectpageImages/Springschool7.webp';
import spring8 from '../DetailProjectpageImages/Springschool8.webp';
import spring9 from '../DetailProjectpageImages/Springschool9.webp';
import spring10 from '../DetailProjectpageImages/Springschool10.webp';
import spring11 from '../DetailProjectpageImages/Springschool11.webp';
import spring12 from '../DetailProjectpageImages/Springschool12.webp';
import spring13 from '../DetailProjectpageImages/Springschool13.webp';
import spring14 from '../DetailProjectpageImages/Springschool14.webp';
import spring15 from '../DetailProjectpageImages/Springschool15.webp';
import plus from '../DetailProjectpageImages/plus.webp';

import otherproject1 from '../../Project-images/P21.webp'
import otherproject2 from '../../Project-images/P22.webp'
import otherproject3 from '../../Project-images/P1.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Springmountschool = () => {
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
        <LazyLoadImage className='Springschool1' src={spring1} alt="" />
        <LazyLoadImage className='Springschool2' src={spring2} alt="" />
      </div>
      <div className="second-container-detailpage-Springschool">
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Springschool4' src={spring4} alt="" /> 
        <LazyLoadImage className='Springschool5' src={spring5} alt="" /> 
        <LazyLoadImage className='Springschool6' src={spring6} alt="" />
      </div>

      
      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring9}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring10}
          alt="Third slide"
        />
        
      </Carousel.Item>
     

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring11}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring12}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring13}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring14}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={spring15}
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
            <h2>{t('springmount')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('springmount-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('springmount-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('springmount-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span>{t('springmount-Location')}</h6>
            <p>{t('springmount-para')}
            </p>
            <p>{t('springmount-para2')}
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
                <Link to="/project/13"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/21"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/22"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Springmountschool;



