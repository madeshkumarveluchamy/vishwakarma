import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DonutThu.css';
import NavBar from '../../../Navbar/Navbar';
import Donutthu1 from '../DetailProjectpageImages/donutthu1.webp';
import Donutthu2 from '../DetailProjectpageImages/donutthu2.webp';
import Donutthu4 from '../DetailProjectpageImages/donutthu4.webp';
import Donutthu5 from '../DetailProjectpageImages/donutthu5.webp';
import Donutthu6 from '../DetailProjectpageImages/donutthu6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P45.webp'
import otherproject2 from '../../Project-images/P46.webp'
import otherproject3 from '../../Project-images/P47.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DonutThu = () => {
  const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Donutthu1' src={Donutthu1} alt="" />
       <LazyLoadImage className='Donutthu2' src={Donutthu2} alt="" />
      </div>
      <div className="second-container-detailpage-Donutthu">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Donutthu4' src={Donutthu4} alt="" />
        <LazyLoadImage className='Donutthu5' src={Donutthu5} alt="" />
        <LazyLoadImage className='Donutthu6' src={Donutthu6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('donuts')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('thudonuts-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('thudonuts-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('thudonuts-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('thudonuts-Location')}</h6>
            <p>{t('thudonuts-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" />  {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/45"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/46"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/47"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default DonutThu;



