import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Adamstailor.css';
import NavBar from '../../../Navbar/Navbar';
import Adamstailor1 from '../DetailProjectpageImages/Adams1.webp';
import Adamstailor2 from '../DetailProjectpageImages/Adams2.webp';
import Adamstailor4 from '../DetailProjectpageImages/Adams4.webp';
import Adamstailor5 from '../DetailProjectpageImages/Adams5.webp';
import Adamstailor6 from '../DetailProjectpageImages/Adams6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P47.webp'
import otherproject2 from '../../Project-images/P48.webp'
import otherproject3 from '../../Project-images/P49.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Adamstailor = () => {
    const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Adamstailor1' src={Adamstailor1} alt="" />
       <LazyLoadImage className='Adamstailor2' src={Adamstailor2} alt="" />
      </div>
      <div className="second-container-detailpage-Adamstailor">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Adamstailor4' src={Adamstailor4} alt="" />
        <LazyLoadImage className='Adamstailor5' src={Adamstailor5} alt="" />
        <LazyLoadImage className='Adamstailor6' src={Adamstailor6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('adams')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('adams-typology')} </h6>
            <h6>{t('Year')}  <span className='specialcharacter'>- </span>{t('adams-year')}</h6>
            <h6>{t('Area')}  <span className='specialcharacter'>- </span>{t('adams-area')} </h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span>{t('adams-Location')}</h6>
            <p>{t('adams-para')}
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
                <Link to="/project/47"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/48"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/49"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Adamstailor;



