import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Purplebay.css';
import NavBar from '../../../Navbar/Navbar';
import Purplebay1 from '../DetailProjectpageImages/Purblebay1.webp';
import Purplebay2 from '../DetailProjectpageImages/Purblebay2.webp';
import Purplebay4 from '../DetailProjectpageImages/Purblebay4.webp';
import Purplebay5 from '../DetailProjectpageImages/Purblebay5.webp';
import Purplebay6 from '../DetailProjectpageImages/Purblebay6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P57.webp'
import otherproject2 from '../../Project-images/soupsaladttk-key.webp';
import otherproject3 from '../../Project-images/P-59.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Purplebay = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Purplebay1' src={Purplebay1} alt="" />
       <LazyLoadImage className='Purplebay2' src={Purplebay2} alt="" />
      </div>
      <div className="second-container-detailpage-Purplebay">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Purplebay4' src={Purplebay4} alt="" />
        <LazyLoadImage className='Purplebay5' src={Purplebay5} alt="" />
        <LazyLoadImage className='Purplebay6' src={Purplebay6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('purplebay')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('purplebay-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('purplebay-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('purplebay-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('purplebay-Location')}</h6>
            <p>{t('purplebay-para')}
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
                <Link to="/project/57"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/58"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/59"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Purplebay;



