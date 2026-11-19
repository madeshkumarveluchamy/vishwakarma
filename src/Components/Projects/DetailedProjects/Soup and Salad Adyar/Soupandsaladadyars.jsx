import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Soupandsaladadyar.css';
import NavBar from '../../../Navbar/Navbar';
import soupandsaladadyar1 from '../DetailProjectpageImages/Soupadayar1.webp';
import soupandsaladadyar2 from '../DetailProjectpageImages/Soupadayar2.webp';
import soupandsaladadyar4 from '../DetailProjectpageImages/Soupadayar4.webp';
import soupandsaladadyar5 from '../DetailProjectpageImages/Soupadayar5.webp';
import soupandsaladadyar6 from '../DetailProjectpageImages/Soupadayar6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/soupsaladttk-key.webp'
import otherproject2 from '../../Project-images/P-59.webp'
import otherproject3 from '../../Project-images/P15.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Soupandsaladadyars = () => {
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
       <LazyLoadImage className='Soupandsaladadyar1' src={soupandsaladadyar1} alt="" />
       <LazyLoadImage className='Soupandsaladadyar2' src={soupandsaladadyar2} alt="" />
      </div>
      <div className="second-container-detailpage-Soupandsaladadyar">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Soupandsaladadyar4' src={soupandsaladadyar4} alt="" />
        <LazyLoadImage className='Soupandsaladadyar5' src={soupandsaladadyar5} alt="" />
        <LazyLoadImage className='Soupandsaladadyar6' src={soupandsaladadyar6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('soupandsaladaadyar')} </h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('soupandsaladaadyar-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('soupandsaladaadyar-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('soupandsaladaadyar-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('soupandsaladaadyar-Location')}</h6>
            <p>{t('soupandsaladaadyar-para')}
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
                <Link to="/project/58"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/59"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/15"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Soupandsaladadyars;



