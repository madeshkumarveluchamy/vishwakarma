import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Precot.css';
import NavBar from '../../../Navbar/Navbar';
import Precot1 from '../DetailProjectpageImages/Precot1.webp';
import Precot2 from '../DetailProjectpageImages/Precot2.webp';
import Precot4 from '../DetailProjectpageImages/Precot4.webp';
import Precot5 from '../DetailProjectpageImages/Precot5.webp';
import Precot6 from '../DetailProjectpageImages/Precot6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P26.webp'
import otherproject2 from '../../Project-images/P27.webp'
import otherproject3 from '../../Project-images/P11.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Precot = () => {
  const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Precot1' src={Precot1} alt="" />
       <LazyLoadImage className='Precot2' src={Precot2} alt="" />
      </div>
      <div className="second-container-detailpage-Precot">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Precot4' src={Precot4} alt="" />
        <LazyLoadImage className='Precot5' src={Precot5} alt="" />
        <LazyLoadImage className='Precot6' src={Precot6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('precot')} </h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span> {t('precot-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('precot-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('precot-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('precot-Location')}</h6>
            <p>{t('precot-para')}
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
                <Link to="/project/26"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/27"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/11"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Precot;



