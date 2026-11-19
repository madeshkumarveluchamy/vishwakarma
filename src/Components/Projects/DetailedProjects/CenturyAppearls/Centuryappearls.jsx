import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Centuryappearls.css';
import NavBar from '../../../Navbar/Navbar';
import century1 from '../DetailProjectpageImages/Century1.webp';
import century2 from '../DetailProjectpageImages/Century2.webp';
import century4 from '../DetailProjectpageImages/Century4.webp';
import century5 from '../DetailProjectpageImages/Century5.webp';
import century6 from '../DetailProjectpageImages/Century6.webp';
import century7 from '../DetailProjectpageImages/Century7.webp';
import century8 from '../DetailProjectpageImages/Century8.webp';
import century9 from '../DetailProjectpageImages/Century9.webp';
import century10 from '../DetailProjectpageImages/Century10.webp';
import century11 from '../DetailProjectpageImages/Century11.webp';
import century12 from '../DetailProjectpageImages/Century12.webp';
import century13 from '../DetailProjectpageImages/Century13.webp';
import century14 from '../DetailProjectpageImages/Century14.webp';
import century15 from '../DetailProjectpageImages/Century15.webp';
import century16 from '../DetailProjectpageImages/Century16.webp';
import century17 from '../DetailProjectpageImages/Century17.webp';
import century18 from '../DetailProjectpageImages/Century18.webp';
import century19 from '../DetailProjectpageImages/Century19.webp';
import century20 from '../DetailProjectpageImages/Century20.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P23.webp'
import otherproject2 from '../../Project-images/P9.webp'
import otherproject3 from '../../Project-images/P11.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Centuryappearls = () => {
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
       <LazyLoadImage className='century1' src={century1} alt="" />
       <LazyLoadImage className='century2' src={century2} alt="" />
      </div>
      <div className="second-container-detailpage-century">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='century4' src={century4} alt="" />
        <LazyLoadImage className='century5' src={century5} alt="" />
        <LazyLoadImage className='century6' src={century6} alt="" />
      </div>

      <div className="container-fluid slide-image-container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item className='slide-inner-contain'>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century7}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century9}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century10}
          alt="Third slide"
        />
        
      </Carousel.Item>
     

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century11}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century12}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century13}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century14}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century15}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century16}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century17}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century18}
          alt="Third slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century19}
          alt="Third slide"
        />
        
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 detail-project-slide-img"
          src={century20}
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
            <h2>{t('century')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('century-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('century-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>{t('century-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span>{t('century-Location')}</h6>
            <p>{t('century-para')}
            </p>
            <p>{t('century-para2')}
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
                <Link to="/project/23"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/9"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/11"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Centuryappearls;



