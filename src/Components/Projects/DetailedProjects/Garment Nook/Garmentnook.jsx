import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Garmentnook.css';
import NavBar from '../../../Navbar/Navbar';
import Garmentnook1 from '../DetailProjectpageImages/garmentnook1.webp';
import Garmentnook2 from '../DetailProjectpageImages/garmentnook2.webp';
import Garmentnook4 from '../DetailProjectpageImages/garmentnook4.webp';
import Garmentnook5 from '../DetailProjectpageImages/garmentnook5.webp';
import Garmentnook6 from '../DetailProjectpageImages/garmentnook6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P51.webp'
import otherproject2 from '../../Project-images/P52.webp'
import otherproject3 from '../../Project-images/P53.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Garmentnook = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Garmentnook1' src={Garmentnook1} alt="" />
       <LazyLoadImage className='Garmentnook2' src={Garmentnook2} alt="" />
      </div>
      <div className="second-container-detailpage-Garmentnook">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Garmentnook4' src={Garmentnook4} alt="" />
        <LazyLoadImage className='Garmentnook5' src={Garmentnook5} alt="" />
        <LazyLoadImage className='Garmentnook6' src={Garmentnook6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('garmentnook')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('garmentnook-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('garmentnook-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('garmentnook-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('garmentnook-Location')}</h6>
            <p>{t('garmentnook-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" />{t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/51"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/52"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/53"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Garmentnook;



