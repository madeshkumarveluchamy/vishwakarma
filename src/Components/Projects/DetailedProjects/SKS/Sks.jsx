import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Sks.css';
import NavBar from '../../../Navbar/Navbar';
import Sks1 from '../DetailProjectpageImages/Attangudi1.webp';
import Sks2 from '../DetailProjectpageImages/Attangudi2.webp';
import Sks4 from '../DetailProjectpageImages/Attangudi4.webp';
import Sks5 from '../DetailProjectpageImages/Attangudi5.webp';
import Sks6 from '../DetailProjectpageImages/Attangudi6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/project18.webp'
import otherproject2 from '../../Project-images/P28.webp'
import otherproject3 from '../../Project-images/P29.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Sks = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Sks1' src={Sks1} alt="" />
       <LazyLoadImage className='Sks2' src={Sks2} alt="" />
      </div>
      <div className="second-container-detailpage-Sks">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Sks4' src={Sks4} alt="" />
        <LazyLoadImage className='Sks5' src={Sks5} alt="" />
        <LazyLoadImage className='Sks6' src={Sks6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('attangudi')} </h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('attangudi-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('attangudi-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('attangudi-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('attangudi-Location')}</h6>
            <p>{t('attangudi-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" /> {t('other-projects')}</div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/18"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/28"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/29"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Sks;



