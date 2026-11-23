import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Soupandsaladttk.css';
import NavBar from '../../../Navbar/Navbar';
import soupandsaladttk1 from '../DetailProjectpageImages/Soupttk1.webp';
import soupandsaladttk2 from '../DetailProjectpageImages/Soupttk2.webp';
import soupandsaladttk4 from '../DetailProjectpageImages/Soupttk4.webp';
import soupandsaladttk5 from '../DetailProjectpageImages/Soupttk5.webp';
import soupandsaladttk6 from '../DetailProjectpageImages/Soupttk6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-59.webp';
import otherproject2 from '../../Project-images/P15.webp';
import otherproject3 from '../../Project-images/P16.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Soupandsaladtk = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Soupandsaladttk1' src={soupandsaladttk1} alt="" />
       <LazyLoadImage className='Soupandsaladttk2' src={soupandsaladttk2} alt="" />
      </div>
      <div className="second-container-detailpage-Soupandsaladttk">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Soupandsaladttk4' src={soupandsaladttk4} alt="" />
        <LazyLoadImage className='Soupandsaladttk5' src={soupandsaladttk5} alt="" />
        <LazyLoadImage className='Soupandsaladttk6' src={soupandsaladttk6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('soupandsaladttk')} </h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('soupandsaladttk-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('soupandsaladttk-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('soupandsaladttk-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('soupandsaladttk-Location')}</h6>
            <p>{t('soupandsaladttk-para')}
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
                <Link to="/project/59"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/15"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/16"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Soupandsaladtk;



