import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Sepiahouse.css';
import NavBar from '../../../Navbar/Navbar';
import Sepiahouse1 from '../DetailProjectpageImages/Sepia1.webp';
import Sepiahouse2 from '../DetailProjectpageImages/Sepia2.webp';
import Sepiahouse4 from '../DetailProjectpageImages/sepia4.webp';
import Sepiahouse5 from '../DetailProjectpageImages/Sepia5.webp';
import Sepiahouse6 from '../DetailProjectpageImages/Sepia6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P35.webp'
import otherproject2 from '../../Project-images/P36.webp'
import otherproject3 from '../../Project-images/P37.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Sepiahouse = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Sepiahouse1' src={Sepiahouse1} alt="" />
       <LazyLoadImage className='Sepiahouse2' src={Sepiahouse2} alt="" />
      </div>
      <div className="second-container-detailpage-Sepiahouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Sepiahouse4' src={Sepiahouse4} alt="" />
        <LazyLoadImage className='Sepiahouse5' src={Sepiahouse5} alt="" />
        <LazyLoadImage className='Sepiahouse6' src={Sepiahouse6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('sepiahouse')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('sepiahouse-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('sepiahouse-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('sepiahouse-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('sepiahouse-Location')}</h6>
            <p>{t('sepiahouse-para')}
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
                <Link to="/project/35"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/36"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/37"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Sepiahouse;



