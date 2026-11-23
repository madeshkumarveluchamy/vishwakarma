import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Pralochnaold.css';
import NavBar from '../../../Navbar/Navbar';
import Pralochnaold1 from '../DetailProjectpageImages/Prolachnaold1.webp';
import Pralochnaold2 from '../DetailProjectpageImages/Prolachnaold2.webp';
import Pralochnaold4 from '../DetailProjectpageImages/Prolachnaold4.webp';
import Pralochnaold5 from '../DetailProjectpageImages/Prolachnaold5.webp';
import Pralochnaold6 from '../DetailProjectpageImages/Prolachnaold6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P56.webp'
import otherproject2 from '../../Project-images/P57.webp'
import otherproject3 from '../../Project-images/soupsaladttk-key.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Pralochnaold = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Pralochnaold1' src={Pralochnaold1} alt="" />
       <LazyLoadImage className='Pralochnaold2' src={Pralochnaold2} alt="" />
      </div>
      <div className="second-container-detailpage-Pralochnaold">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Pralochnaold4' src={Pralochnaold4} alt="" />
        <LazyLoadImage className='Pralochnaold5' src={Pralochnaold5} alt="" />
        <LazyLoadImage className='Pralochnaold6' src={Pralochnaold6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('pralochnaold')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('pralochnaold-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('pralochnaold-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('pralochnaold-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('pralochnaold-Location')}</h6>
            <p>{t('pralochnaold-para')}
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
                <Link to="/project/56"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/57"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/58"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Pralochnaold;



