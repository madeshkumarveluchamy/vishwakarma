import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Donutvadavalli.css';
import NavBar from '../../../Navbar/Navbar';
import Donutvadavalli1 from '../DetailProjectpageImages/donutvadavalli1.webp';
import Donutvadavalli2 from '../DetailProjectpageImages/donutvadavalli2.webp';
import Donutvadavalli4 from '../DetailProjectpageImages/donutvadavalli4.webp';
import Donutvadavalli5 from '../DetailProjectpageImages/donutvadavalli5.webp';
import Donutvadavalli6 from '../DetailProjectpageImages/donutvadavalli6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P50.webp'
import otherproject2 from '../../Project-images/P51.webp'
import otherproject3 from '../../Project-images/P52.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Donutvadavalli = () => {
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
       <LazyLoadImage className='Donutvadavalli1' src={Donutvadavalli1} alt="" />
       <LazyLoadImage className='Donutvadavalli2' src={Donutvadavalli2} alt="" />
      </div>
      <div className="second-container-detailpage-Donutvadavalli">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Donutvadavalli4' src={Donutvadavalli4} alt="" />
        <LazyLoadImage className='Donutvadavalli5' src={Donutvadavalli5} alt="" />
        <LazyLoadImage className='Donutvadavalli6' src={Donutvadavalli6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('donuts')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('vadavallidonuts-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('vadavallidonuts-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('vadavallidonuts-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('vadavallidonuts-Location')}</h6>
            <p>{t('vadavallidonuts-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" />  {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/50"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/51"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/52"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Donutvadavalli;



