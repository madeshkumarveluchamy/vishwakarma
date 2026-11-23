import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Veedu5.css';
import NavBar from '../../../Navbar/Navbar';
import Veedu51 from '../DetailProjectpageImages/veedu5-1.webp';
import Veedu52 from '../DetailProjectpageImages/Veedu5-2.webp';
import Veedu54 from '../DetailProjectpageImages/veedu5-4.webp';
import Veedu55 from '../DetailProjectpageImages/Veedu5-5.webp';
import Veedu56 from '../DetailProjectpageImages/Veedu5-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-43.webp'
import otherproject2 from '../../Project-images/P-44.webp'
import otherproject3 from '../../Project-images/P3.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Veedu5 = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Veedu51' src={Veedu51} alt="" />
       <LazyLoadImage className='Veedu52' src={Veedu52} alt="" />
      </div>
      <div className="second-container-detailpage-Veedu5">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Veedu54' src={Veedu54} alt="" />
        <LazyLoadImage className='Veedu55' src={Veedu55} alt="" />
        <LazyLoadImage className='Veedu56' src={Veedu56} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
           <h2>{t('veedu5')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('veedu5-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('veedu5-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('veedu5-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('veedu5-Location')}</h6>
            {/* <p>{t('veedu5-para')}</p> */}
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" />{t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/43"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/44"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/3"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Veedu5;