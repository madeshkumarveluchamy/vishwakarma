import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Berylhouse.css';
import NavBar from '../../../Navbar/Navbar';
import Berylhouse1 from '../DetailProjectpageImages/Beryl1.webp';
import Berylhouse2 from '../DetailProjectpageImages/Beryl2.webp';
import Berylhouse4 from '../DetailProjectpageImages/Beryl4.webp';
import Berylhouse5 from '../DetailProjectpageImages/Beryl5.webp';
import Berylhouse6 from '../DetailProjectpageImages/Beryl6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P29.webp'
import otherproject2 from '../../Project-images/P30.webp'
import otherproject3 from '../../Project-images/P31.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Berylhouse = () => {
  const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Berylhouse1' src={Berylhouse1} alt="" />
       <LazyLoadImage className='Berylhouse2' src={Berylhouse2} alt="" />
      </div>
      <div className="second-container-detailpage-Berylhouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Berylhouse4' src={Berylhouse4} alt="" />
        <LazyLoadImage className='Berylhouse5' src={Berylhouse5} alt="" />
        <LazyLoadImage className='Berylhouse6' src={Berylhouse6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('berlyhouse')}</h2>
           <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('berlyhouse-typology')} </h6>
            <h6>{t('Year')}  <span className='specialcharacter'>- </span>{t('berlyhouse-year')}</h6>
            <h6>{t('Area')}  <span className='specialcharacter'>- </span>{t('berlyhouse-area')} </h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span>{t('berlyhouse-Location')}</h6>
            <p>{t('berlyhouse-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" />  {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/29"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/30"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/31"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Berylhouse;



