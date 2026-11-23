import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Mootramveedu2.css';
import NavBar from '../../../Navbar/Navbar';
import Mootramveedu21 from '../DetailProjectpageImages/Mootram2-1.webp';
import Mootramveedu22 from '../DetailProjectpageImages/Mootram2-2.webp';
import Mootramveedu24 from '../DetailProjectpageImages/Mootram2-4.webp';
import Mootramveedu25 from '../DetailProjectpageImages/Mootram2-5.webp';
import Mootramveedu26 from '../DetailProjectpageImages/Mootram2-6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P33.webp'
import otherproject2 from '../../Project-images/P34.webp'
import otherproject3 from '../../Project-images/P35.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Mootramveedu2 = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Mootramveedu21' src={Mootramveedu21} alt="" />
       <LazyLoadImage className='Mootramveedu22' src={Mootramveedu22} alt="" />
      </div>
      <div className="second-container-detailpage-Mootramveedu2">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Mootramveedu24' src={Mootramveedu24} alt="" />
        <LazyLoadImage className='Mootramveedu25' src={Mootramveedu25} alt="" />
        <LazyLoadImage className='Mootramveedu26' src={Mootramveedu26} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('mootram2')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('mootram2-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('mootram2-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('mootram2-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('mootram2-Location')}</h6>
            <p>{t('mootram2-para')}
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
                <Link to="/project/33"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/34"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/35"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Mootramveedu2;



