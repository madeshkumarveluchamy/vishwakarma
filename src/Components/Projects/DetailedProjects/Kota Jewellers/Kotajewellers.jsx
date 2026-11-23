import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Kotajewellers.css';
import NavBar from '../../../Navbar/Navbar';
import Kotajewellers1 from '../DetailProjectpageImages/kota1.webp';
import Kotajewellers2 from '../DetailProjectpageImages/kota2.webp';
import Kotajewellers4 from '../DetailProjectpageImages/kota4.webp';
import Kotajewellers5 from '../DetailProjectpageImages/kota5.webp';
import Kotajewellers6 from '../DetailProjectpageImages/kota6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P53.webp'
import otherproject2 from '../../Project-images/P54.webp'
import otherproject3 from '../../Project-images/P55.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Kotajewellers = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Kotajewellers1' src={Kotajewellers1} alt="" />
       <LazyLoadImage className='Kotajewellers2' src={Kotajewellers2} alt="" />
      </div>
      <div className="second-container-detailpage-Kotajewellers">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Kotajewellers4' src={Kotajewellers4} alt="" />
        <LazyLoadImage className='Kotajewellers5' src={Kotajewellers5} alt="" />
        <LazyLoadImage className='Kotajewellers6' src={Kotajewellers6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('kotajewellers')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('kotajewellers-typology')}</h6>
            {/* <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('kotajewellers-year')}</h6> */}
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('kotajewellers-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('kotajewellers-Location')}</h6>
            <p>{t('kotajewellers-para')}
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
                <Link to="/project/53"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/54"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/55"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Kotajewellers;



