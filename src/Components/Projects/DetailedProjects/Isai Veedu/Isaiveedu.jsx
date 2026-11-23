import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Isaiveedu.css';
import NavBar from '../../../Navbar/Navbar';
import Isaiveedu1 from '../DetailProjectpageImages/Isaiveedu1.webp';
import Isaiveedu2 from '../DetailProjectpageImages/Isaiveedu2.webp';
import Isaiveedu4 from '../DetailProjectpageImages/Isaiveedu4.webp';
import Isaiveedu5 from '../DetailProjectpageImages/Isaiveedu5.webp';
import Isaiveedu6 from '../DetailProjectpageImages/Isaiveedu6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P33.webp'
import otherproject2 from '../../Project-images/P34.webp'
import otherproject3 from '../../Project-images/P35.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Isaiveedu = () => {
    const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Isaiveedu1' src={Isaiveedu1} alt="" />
       <LazyLoadImage className='Isaiveedu2' src={Isaiveedu2} alt="" />
      </div>
      <div className="second-container-detailpage-Isaiveedu">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Isaiveedu4' src={Isaiveedu4} alt="" />
        <LazyLoadImage className='Isaiveedu5' src={Isaiveedu5} alt="" />
        <LazyLoadImage className='Isaiveedu6' src={Isaiveedu6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('iasiveedu')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('iasiveedu-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('iasiveedu-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('iasiveedu-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('iasiveedu-Location')}</h6>
            <p>{t('iasiveedu-para')}
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
                <Link to="/project/33"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/34"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/35"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Isaiveedu;



