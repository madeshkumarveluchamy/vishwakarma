import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Anantaboutique.css';
import NavBar from '../../../Navbar/Navbar';
import Anantaboutique1 from '../DetailProjectpageImages/Ananta1.webp';
import Anantaboutique2 from '../DetailProjectpageImages/Ananta2.webp';
import Anantaboutique4 from '../DetailProjectpageImages/Ananta4.webp';
import Anantaboutique5 from '../DetailProjectpageImages/Ananta5.webp';
import Anantaboutique6 from '../DetailProjectpageImages/Ananta6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P48.webp'
import otherproject2 from '../../Project-images/P49.webp'
import otherproject3 from '../../Project-images/P50.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Anantaboutique = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    const project = galleryItems.find(item => item.id === parseInt(id, 10));
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Anantaboutique1' src={Anantaboutique1} alt="" />
       <LazyLoadImage className='Anantaboutique2' src={Anantaboutique2} alt="" />
      </div>
      <div className="second-container-detailpage-Anantaboutique">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Anantaboutique4' src={Anantaboutique4} alt="" />
        <LazyLoadImage className='Anantaboutique5' src={Anantaboutique5} alt="" />
        <LazyLoadImage className='Anantaboutique6' src={Anantaboutique6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('anantaboutique')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('anantaboutique-typology')} </h6>
            <h6>{t('Year')}  <span className='specialcharacter'>- </span>{t('anantaboutique-year')}</h6>
            <h6>{t('Area')}  <span className='specialcharacter'>- </span>{t('anantaboutique-area')} </h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span>{t('anantaboutique-Location')}</h6>
            <p>{t('anantaboutique-para')}
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
                <Link to="/project/48"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/49"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/50"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Anantaboutique;



