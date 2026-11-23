import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Houseofearthen.css';
import NavBar from '../../../Navbar/Navbar';
import hoe1 from '../DetailProjectpageImages/hoe1.webp';
import hoe2 from '../DetailProjectpageImages/hoe2.webp';
import hoe4 from '../DetailProjectpageImages/hoe4.webp';
import hoe5 from '../DetailProjectpageImages/hoe5.webp';
import hoe6 from '../DetailProjectpageImages/hoe6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/project17.webp'
import otherproject2 from '../../Project-images/project18.webp'
import otherproject3 from '../../Project-images/P28.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Houseofearthen = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Houseofearthen1' src={hoe1} alt="" />
       <LazyLoadImage className='Houseofearthen2' src={hoe2} alt="" />
      </div>
      <div className="second-container-detailpage-Houseofearthen">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Houseofearthen4' src={hoe4} alt="" />
        <LazyLoadImage className='Houseofearthen5' src={hoe5} alt="" />
        <LazyLoadImage className='Houseofearthen6' src={hoe6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('hoe')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('hoe-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('hoe-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('hoe-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('hoe-Location')}</h6>
            <p>{t('hoe-para')}
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
                <Link to="/project/17"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/18"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/28"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Houseofearthen;



