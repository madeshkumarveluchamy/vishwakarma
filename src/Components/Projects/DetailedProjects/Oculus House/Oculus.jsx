import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Oculus.css';
import NavBar from '../../../Navbar/Navbar';
import Oculus1 from '../DetailProjectpageImages/Oculus1.webp';
import Oculus2 from '../DetailProjectpageImages/Oculus2.webp';
import Oculus4 from '../DetailProjectpageImages/Oculus4.webp';
import Oculus5 from '../DetailProjectpageImages/Oculus5.webp';
import Oculus6 from '../DetailProjectpageImages/oculus6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P34.webp'
import otherproject2 from '../../Project-images/P35.webp'
import otherproject3 from '../../Project-images/P36.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Oculus = () => {
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
       <LazyLoadImage className='Oculus1' src={Oculus1} alt="" />
       <LazyLoadImage className='Oculus2' src={Oculus2} alt="" />
      </div>
      <div className="second-container-detailpage-Oculus">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Oculus4' src={Oculus4} alt="" />
        <LazyLoadImage className='Oculus5' src={Oculus5} alt="" />
        <LazyLoadImage className='Oculus6' src={Oculus6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('oculus')}</h2>
            <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('oculus-typology')} </h6>
            <h6>{t('Year')} <span className='specialcharacter'>- </span>{t('oculus-year')} </h6>
            <h6>{t('Area')} <span className='specialcharacter'>- </span>{t('oculus-area')} </h6>
            <h6>{t('Location')} <span className='specialcharacter'>- </span>{t('oculus-Location')}</h6>
            <p>{t('oculus-para')}
            </p>
            <p>{t('oculus-para2')}
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
                <Link to="/project/34"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/35"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/36"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Oculus;



