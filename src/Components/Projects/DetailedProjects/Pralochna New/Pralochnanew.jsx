import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Pralochnanew.css';
import NavBar from '../../../Navbar/Navbar';
import Pralochnanew1 from '../DetailProjectpageImages/Pralochnanew1.webp';
import Pralochnanew2 from '../DetailProjectpageImages/Pralochnanew2.webp';
import Pralochnanew4 from '../DetailProjectpageImages/Pralochnanew4.webp';
import Pralochnanew5 from '../DetailProjectpageImages/Pralochnanew5.webp';
import Pralochnanew6 from '../DetailProjectpageImages/Pralochnanew6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P55.webp'
import otherproject2 from '../../Project-images/P56.webp'
import otherproject3 from '../../Project-images/P57.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Pralochnanew = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Pralochnanew1' src={Pralochnanew1} alt="" />
       <LazyLoadImage className='Pralochnanew2' src={Pralochnanew2} alt="" />
      </div>
      <div className="second-container-detailpage-Pralochnanew">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Pralochnanew4' src={Pralochnanew4} alt="" />
        <LazyLoadImage className='Pralochnanew5' src={Pralochnanew5} alt="" />
        <LazyLoadImage className='Pralochnanew6' src={Pralochnanew6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('pralochnanew')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('pralochnanew-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('pralochnanew-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('pralochnanew-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('pralochnanew-Location')}</h6>
            <p>{t('pralochnanew-para')}
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
                <Link to="/project/55"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/56"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/57"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Pralochnanew;



