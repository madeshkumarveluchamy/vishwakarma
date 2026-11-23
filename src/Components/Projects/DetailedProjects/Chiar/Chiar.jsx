import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Chiar.css';
import NavBar from '../../../Navbar/Navbar';
import chiar1 from '../DetailProjectpageImages/chiar1.webp';
import chiar2 from '../DetailProjectpageImages/chiar2.webp';
import chiar4 from '../DetailProjectpageImages/chiar4.webp';
import chiar5 from '../DetailProjectpageImages/chiar5.webp';
import chiar6 from '../DetailProjectpageImages/chiar6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P24.webp';
import otherproject2 from '../../Project-images/P25.webp';
import otherproject3 from '../../Project-images/P26.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Chiar = () => {
  const { t} = useTranslation('global');
  
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='chiar1' src={chiar1} alt="" />
       <LazyLoadImage className='chiar2' src={chiar2} alt="" />
      </div>
      <div className="second-container-detailpage-chiar">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='chiar4' src={chiar4} alt="" />
        <LazyLoadImage className='chiar5' src={chiar5} alt="" />
        <LazyLoadImage className='chiar6' src={chiar6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('chiar')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('chiar-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('chiar-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('chiar-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('chiar-Location')}</h6>
            <p>{t('chiar-para')}
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
                <Link to="/project/24"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/25"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/26"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Chiar;



