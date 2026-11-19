import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../../Gallery';
import './Precol.css';
import NavBar from '../../../Navbar/Navbar';
import Precol1 from '../DetailProjectpageImages/Pricol1.webp';
import Precol2 from '../DetailProjectpageImages/Pricol2.webp';
import Precol4 from '../DetailProjectpageImages/Pricol4.webp';
import Precol5 from '../DetailProjectpageImages/Precol5.webp';
import Precol6 from '../DetailProjectpageImages/Precol6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P27.webp'
import otherproject2 from '../../Project-images/P11.webp'
import otherproject3 from '../../Project-images/P14.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Precol = () => {
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
       <LazyLoadImage className='Precol1' src={Precol1} alt="" />
       <LazyLoadImage className='Precol2' src={Precol2} alt="" />
      </div>
      <div className="second-container-detailpage-Precol">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Precol4' src={Precol4} alt="" />
        <LazyLoadImage className='Precol5' src={Precol5} alt="" />
        <LazyLoadImage className='Precol6' src={Precol6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('precol')} </h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span> {t('precol-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('precol-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('precol-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('precol-Location')}</h6>
            <p>{t('precol-para')}
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
                <Link to="/project/21"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/11"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/14"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Precol;



