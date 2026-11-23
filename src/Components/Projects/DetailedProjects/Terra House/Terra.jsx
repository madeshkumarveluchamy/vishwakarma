import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Terra.css';
import NavBar from '../../../Navbar/Navbar';
import Terra1 from '../DetailProjectpageImages/Terra1.webp';
import Terra2 from '../DetailProjectpageImages/Terra2.webp';
import Terra4 from '../DetailProjectpageImages/Terra4.webp';
import Terra5 from '../DetailProjectpageImages/Terra5.webp';
import Terra6 from '../DetailProjectpageImages/terra6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P36.webp'
import otherproject2 from '../../Project-images/P37.webp'
import otherproject3 from '../../Project-images/P-38.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Terra = () => {
  const { t} = useTranslation('global');
  
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Terra1' src={Terra1} alt="" />
       <LazyLoadImage className='Terra2' src={Terra2} alt="" />
      </div>
      <div className="second-container-detailpage-Terra">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Terra4' src={Terra4} alt="" />
        <LazyLoadImage className='Terra5' src={Terra5} alt="" />
        <LazyLoadImage className='Terra6' src={Terra6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
             <h2>{t('terrahouse')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('terrahouse-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('terrahouse-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('terrahouse-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('terrahouse-Location')}</h6>
            <p>{t('terrahouse-para')}
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
                <Link to="/project/36"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/37"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/38"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Terra;



