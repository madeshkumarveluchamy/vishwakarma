import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Bharanisilks.css';
import NavBar from '../../../Navbar/Navbar';
import Bharanisilks1 from '../DetailProjectpageImages/Bharanisilks1.webp';
import Bharanisilks2 from '../DetailProjectpageImages/Bharanisilks2.webp';
import Bharanisilks4 from '../DetailProjectpageImages/Bharanisilks4.webp';
import Bharanisilks5 from '../DetailProjectpageImages/Bharanisilks5.webp';
import Bharanisilks6 from '../DetailProjectpageImages/Bharanisilks6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P15.webp'
import otherproject2 from '../../Project-images/P16.webp'
import otherproject3 from '../../Project-images/P45.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Bharanisilks = () => {
  const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Bharanisilks1' src={Bharanisilks1} alt="" />
       <LazyLoadImage className='Bharanisilks2' src={Bharanisilks2} alt="" />
      </div>
      <div className="second-container-detailpage-Bharanisilks">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Bharanisilks4' src={Bharanisilks4} alt="" />
        <LazyLoadImage className='Bharanisilks5' src={Bharanisilks5} alt="" />
        <LazyLoadImage className='Bharanisilks6' src={Bharanisilks6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('bharanisilks')}</h2>
           <h6>{t('Typology')} <span className='specialcharacter'>- </span>{t('bharanisilks-typology')} </h6>
            <h6>{t('Year')}  <span className='specialcharacter'>- </span>{t('bharanisilks-year')}</h6>
            <h6>{t('Area')}  <span className='specialcharacter'>- </span>{t('bharanisilks-area')} </h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span>{t('bharanisilks-Location')}</h6>
            <p>{t('bharanisilks-para')}
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

export default Bharanisilks;



