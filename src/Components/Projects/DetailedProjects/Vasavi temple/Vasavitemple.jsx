import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Vasavitemple.css';
import NavBar from '../../../Navbar/Navbar';
import Vasavitemple1 from '../DetailProjectpageImages/vasavi1.webp';
import Vasavitemple2 from '../DetailProjectpageImages/vasavi2.webp';
import Vasavitemple4 from '../DetailProjectpageImages/vasavi4.webp';
import Vasavitemple5 from '../DetailProjectpageImages/vasavi5.webp';
import Vasavitemple6 from '../DetailProjectpageImages/vasavi6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P6.webp'
import otherproject2 from '../../Project-images/P7.webp'
import otherproject3 from '../../Project-images/P8.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Vasavitemple = () => {
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
       <LazyLoadImage className='Vasavitemple1' src={Vasavitemple1} alt="" />
       <LazyLoadImage className='Vasavitemple2' src={Vasavitemple2} alt="" />
      </div>
      <div className="second-container-detailpage-Vasavitemple">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Vasavitemple4' src={Vasavitemple4} alt="" />
        <LazyLoadImage className='Vasavitemple5' src={Vasavitemple5} alt="" />
        <LazyLoadImage className='Vasavitemple6' src={Vasavitemple6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('vasavitemple')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('vasavitemple-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('vasavitemple-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('vasavitemple-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('vasavitemple-Location')}</h6>
            <p>{t('vasavitemple-para')}
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
                <Link to="/project/6"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/7"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/8"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Vasavitemple;



