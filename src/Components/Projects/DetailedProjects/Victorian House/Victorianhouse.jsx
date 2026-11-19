import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Victorianhouse.css';
import NavBar from '../../../Navbar/Navbar';
import Victorianhouse1 from '../DetailProjectpageImages/victorianhouse1.webp';
import Victorianhouse2 from '../DetailProjectpageImages/victorianhouse2.webp';
import Victorianhouse4 from '../DetailProjectpageImages/Victorian4.webp';
import Victorianhouse5 from '../DetailProjectpageImages/Victorian5.webp';
import Victorianhouse6 from '../DetailProjectpageImages/Victorian6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-38.webp'
import otherproject2 from '../../Project-images/P-39.webp'
import otherproject3 from '../../Project-images/P-40.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Victorianhouse = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    const project = galleryItems.find(item => item.id === parseInt(id, 10));
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Victorianhouse1' src={Victorianhouse1} alt="" />
       <LazyLoadImage className='Victorianhouse2' src={Victorianhouse2} alt="" />
      </div>
      <div className="second-container-detailpage-Victorianhouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Victorianhouse4' src={Victorianhouse4} alt="" />
        <LazyLoadImage className='Victorianhouse5' src={Victorianhouse5} alt="" />
        <LazyLoadImage className='Victorianhouse6' src={Victorianhouse6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
           <h2>{t('victorianhouse')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('victorianhouse-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('victorianhouse-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('victorianhouse-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('victorianhouse-Location')}</h6>
            <p>{t('victorianhouse-para')}
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
                <Link to="/project/38"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/39"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/40"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Victorianhouse;



