import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Mahilampoo.css';
import NavBar from '../../../Navbar/Navbar';
import mahilampoo1 from '../DetailProjectpageImages/mahilampoo1.webp';
import mahilampoo2 from '../DetailProjectpageImages/Mahilampoo2.webp';
import mahilampoo4 from '../DetailProjectpageImages/Mahilampoo4.webp';
import mahilampoo5 from '../DetailProjectpageImages/Mahilampoo5.webp';
import mahilampoo6 from '../DetailProjectpageImages/Mahilampoo6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P22.webp'
import otherproject2 from '../../Project-images/P2.webp'
import otherproject3 from '../../Project-images/P23.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Mahilampoo = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Mahilampoo1' src={mahilampoo1} alt="" />
       <LazyLoadImage className='Mahilampoo2' src={mahilampoo2} alt="" />
      </div>
      <div className="second-container-detailpage-Mahilampoo">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Mahilampoo4' src={mahilampoo4} alt="" />
        <LazyLoadImage className='Mahilampoo5' src={mahilampoo5} alt="" />
        <LazyLoadImage className='Mahilampoo6' src={mahilampoo6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('mahilampoo')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('mahilampoo-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('mahilampoo-year')}</h6>
            {/* <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('mahilampoo-area')}</h6> */}
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('mahilampoo-Location')}</h6>
            <p>{t('mahilampoo-para')}
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
                <Link to="/project/22"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/2"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/23"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Mahilampoo;



