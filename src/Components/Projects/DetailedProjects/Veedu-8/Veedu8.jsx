import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Veedu8.css';
import NavBar from '../../../Navbar/Navbar';
import Veedu81 from '../DetailProjectpageImages/veedu8-1.webp';
import Veedu82 from '../DetailProjectpageImages/veedu8-2.webp';
import Veedu84 from '../DetailProjectpageImages/veedu8-4.webp';
import Veedu85 from '../DetailProjectpageImages/veedu8-5.webp';
import Veedu86 from '../DetailProjectpageImages/veedu8-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P3.webp'
import otherproject2 from '../../Project-images/P4.webp'
import otherproject3 from '../../Project-images/P5.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Veedu8 = () => {
  const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Veedu81' src={Veedu81} alt="" />
       <LazyLoadImage className='Veedu82' src={Veedu82} alt="" />
      </div>
      <div className="second-container-detailpage-Veedu8">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Veedu84' src={Veedu84} alt="" />
        <LazyLoadImage className='Veedu85' src={Veedu85} alt="" />
        <LazyLoadImage className='Veedu86' src={Veedu86} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('Veedu8')}</h2>
           <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('Veedu8-typology')} </h6>
            <h6>{t('Year')}  <span className='specialcharacter'>- </span>{t('Veedu8-year')}</h6>
            <h6>{t('Area')}  <span className='specialcharacter'>- </span>{t('Veedu8-area')} </h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span>{t('Veedu8-Location')}</h6>
            {/* <p>{t('Veedu8-para')}
            </p> */}
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/15"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/16"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/45"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Veedu8;



