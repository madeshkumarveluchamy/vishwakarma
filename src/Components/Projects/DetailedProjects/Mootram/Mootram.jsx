import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Mootram.css';
import NavBar from '../../../Navbar/Navbar';
import mootram1 from '../DetailProjectpageImages/mootram1.webp';
import mootram2 from '../DetailProjectpageImages/mootram2.webp';
import mootram4 from '../DetailProjectpageImages/mootram4.webp';
import mootram5 from '../DetailProjectpageImages/mootram5.webp';
import mootram6 from '../DetailProjectpageImages/mootram6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P7.webp'
import otherproject2 from '../../Project-images/P8.webp'
import otherproject3 from '../../Project-images/P12.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Mootram = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Mootram1' src={mootram1} alt="" />
       <LazyLoadImage className='Mootram2' src={mootram2} alt="" />
      </div>
      <div className="second-container-detailpage-Mootram">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Mootram4' src={mootram4} alt="" />
        <LazyLoadImage className='Mootram5' src={mootram5} alt="" />
        <LazyLoadImage className='Mootram6' src={mootram6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('mootram')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('mootram-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('mootram-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('mootram-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('mootram-Location')}</h6>
            <p>{t('mootram-para')}
            </p>
            <p>{t('mootram-para2')}
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
                <Link to="/project/7"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/8"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/12"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Mootram;



