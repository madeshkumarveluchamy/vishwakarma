import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Veedu1.css';
import NavBar from '../../../Navbar/Navbar';
import Veedu11 from '../DetailProjectpageImages/Veedu1-1.webp';
import Veedu12 from '../DetailProjectpageImages/Veedu1-2.webp';
import Veedu14 from '../DetailProjectpageImages/Veedu1-4.webp';
import Veedu15 from '../DetailProjectpageImages/Veedu1-5.webp';
import Veedu16 from '../DetailProjectpageImages/Veedu1-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-39.webp'
import otherproject2 from '../../Project-images/P-40.webp'
import otherproject3 from '../../Project-images/P-41.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Veedu1 = () => {
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
       <LazyLoadImage className='Veedu11' src={Veedu11} alt="" />
       <LazyLoadImage className='Veedu12' src={Veedu12} alt="" />
      </div>
      <div className="second-container-detailpage-Veedu1">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Veedu14' src={Veedu14} alt="" />
        <LazyLoadImage className='Veedu15' src={Veedu15} alt="" />
        <LazyLoadImage className='Veedu16' src={Veedu16} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
             <h2>{t('veeduone')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('veeduone-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('veeduone-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('veeduone-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('veeduone-Location')}</h6>
            {/* <p>{t('veeduone-para')}</p> */}
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/39"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/40"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/41"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Veedu1;



