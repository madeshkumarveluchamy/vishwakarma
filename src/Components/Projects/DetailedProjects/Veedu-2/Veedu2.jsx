import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Veedu2.css';
import NavBar from '../../../Navbar/Navbar';
import Veedu21 from '../DetailProjectpageImages/Veedu2-1.webp';
import Veedu22 from '../DetailProjectpageImages/Veedu2-2.webp';
import Veedu24 from '../DetailProjectpageImages/Veedu2-4.webp';
import Veedu25 from '../DetailProjectpageImages/Veedu2-5.webp';
import Veedu26 from '../DetailProjectpageImages/Veedu2-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-40.webp'
import otherproject2 from '../../Project-images/P-41.webp'
import otherproject3 from '../../Project-images/P-42.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Veedu2 = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Veedu21' src={Veedu21} alt="" />
       <LazyLoadImage className='Veedu22' src={Veedu22} alt="" />
      </div>
      <div className="second-container-detailpage-Veedu2">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Veedu24' src={Veedu24} alt="" />
        <LazyLoadImage className='Veedu25' src={Veedu25} alt="" />
        <LazyLoadImage className='Veedu26' src={Veedu26} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('veedu2')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('veedu2-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('veedu2-year')}</h6>
            {/* <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('veedu2-area')}</h6> */}
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('veedu2-Location')}</h6>
            {/* <p>{t('veedu2-para')}</p> */}
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/40"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/41"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/42"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Veedu2;



