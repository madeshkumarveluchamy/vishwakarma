import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Mahapalace.css';
import NavBar from '../../../Navbar/Navbar';
import Mahapalace1 from '../DetailProjectpageImages/mahapalace1.webp';
import Mahapalace2 from '../DetailProjectpageImages/mahapalace2.webp';
import Mahapalace4 from '../DetailProjectpageImages/mahapalace4.webp';
import Mahapalace5 from '../DetailProjectpageImages/mahapalace5.webp';
import Mahapalace6 from '../DetailProjectpageImages/mahapalace6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P54.webp'
import otherproject2 from '../../Project-images/P55.webp'
import otherproject3 from '../../Project-images/P56.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Mahapalace = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Mahapalace1' src={Mahapalace1} alt="" />
       <LazyLoadImage className='Mahapalace2' src={Mahapalace2} alt="" />
      </div>
      <div className="second-container-detailpage-Mahapalace">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Mahapalace4' src={Mahapalace4} alt="" />
        <LazyLoadImage className='Mahapalace5' src={Mahapalace5} alt="" />
        <LazyLoadImage className='Mahapalace6' src={Mahapalace6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('mahapalace')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('mahapalace-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('mahapalace-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('mahapalace-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('mahapalace-Location')}</h6>
            <p>{t('mahapalace-para')}
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
                <Link to="/project/54"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/55"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/56"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Mahapalace;



