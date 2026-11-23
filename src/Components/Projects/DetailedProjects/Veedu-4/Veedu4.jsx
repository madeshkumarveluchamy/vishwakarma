import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Veedu4.css';
import NavBar from '../../../Navbar/Navbar';
import Veedu41 from '../DetailProjectpageImages/Veedu4-1.webp';
import Veedu42 from '../DetailProjectpageImages/Veedu4-2.webp';
import Veedu44 from '../DetailProjectpageImages/veedu4-4.webp';
import Veedu45 from '../DetailProjectpageImages/Veedu4-5.webp';
import Veedu46 from '../DetailProjectpageImages/Veedu4-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-42.webp'
import otherproject2 from '../../Project-images/P-43.webp'
import otherproject3 from '../../Project-images/P-44.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Veedu4 = () => {
  const { t } = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Veedu41' src={Veedu41} alt="" />
       <LazyLoadImage className='Veedu42' src={Veedu42} alt="" />
      </div>
      <div className="second-container-detailpage-Veedu4">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Veedu44' src={Veedu44} alt="" />
        <LazyLoadImage className='Veedu45' src={Veedu45} alt="" />
        <LazyLoadImage className='Veedu46' src={Veedu46} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
           <h2>{t('veedu4')} <span className='specialcharacter'>4 </span></h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span> {t('veedu4-typology')}</h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span> {t('veedu4-year')}</h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span> {t('veedu4-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('veedu4-Location')}</h6>
            <p>{t('veedu4-para')}
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
                <Link to="/project/42"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/43"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/44"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Veedu4;



