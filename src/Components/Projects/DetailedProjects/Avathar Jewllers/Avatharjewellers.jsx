import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Avatharjewellers.css';
import NavBar from '../../../Navbar/Navbar';
import Avatharjewellers1 from '../DetailProjectpageImages/avatar1.webp';
import Avatharjewellers2 from '../DetailProjectpageImages/avatar2.webp';
import Avatharjewellers4 from '../DetailProjectpageImages/avatar4.webp';
import Avatharjewellers5 from '../DetailProjectpageImages/avatar5.webp';
import Avatharjewellers6 from '../DetailProjectpageImages/avatar6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P46.webp'
import otherproject2 from '../../Project-images/P47.webp'
import otherproject3 from '../../Project-images/P48.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Avatharjewellers = () => {
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
       <LazyLoadImage className='Avatharjewellers1' src={Avatharjewellers1} alt="" />
       <LazyLoadImage className='Avatharjewellers2' src={Avatharjewellers2} alt="" />
      </div>
      <div className="second-container-detailpage-Avatharjewellers">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Avatharjewellers4' src={Avatharjewellers4} alt="" />
        <LazyLoadImage className='Avatharjewellers5' src={Avatharjewellers5} alt="" />
        <LazyLoadImage className='Avatharjewellers6' src={Avatharjewellers6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('avatharjewellers')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('avatharjewellers-typology')} </h6>
            {/* <h6>{t('Year')}  <span className='specialcharacter'>- </span>{t('avatharjewellers-year')}</h6> */}
            <h6>{t('Area')}  <span className='specialcharacter'>- </span>{t('avatharjewellers-area')} </h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span>{t('avatharjewellers-Location')}</h6>
            <p>{t('avatharjewellers-para')}
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
                <Link to="/project/46"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/47"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/48"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Avatharjewellers;



