import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Eventdecor.css';
import NavBar from '../../../Navbar/Navbar';
import eventdecor1 from '../DetailProjectpageImages/Eventdecor1.webp';
import eventdecor2 from '../DetailProjectpageImages/eventdecor2.webp';
import eventdecor4 from '../DetailProjectpageImages/Eventdecor4.webp';
import eventdecor5 from '../DetailProjectpageImages/Eventdecor5.webp';
import eventdecor6 from '../DetailProjectpageImages/Eventdecor6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P1.webp'
import otherproject2 from '../../Project-images/P10.webp'
import otherproject3 from '../../Project-images/P19.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Eventdecor = () => {
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
       <LazyLoadImage className='Eventdecor1' src={eventdecor1} alt="" />
       <LazyLoadImage className='Eventdecor2' src={eventdecor2} alt="" />
      </div>
      <div className="second-container-detailpage-Eventdecor">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Eventdecor4' src={eventdecor4} alt="" />
        <LazyLoadImage className='Eventdecor5' src={eventdecor5} alt="" />
        <LazyLoadImage className='Eventdecor6' src={eventdecor6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('eventdecors')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('eventdecors-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('eventdecors-year')}</h6>
            {/* <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('eventdecors-area')}</h6> */}
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('eventdecors-Location')}</h6>
             <p>{t('eventdecors-para')}
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
                <Link to="/project/1"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/10"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/19"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Eventdecor;



