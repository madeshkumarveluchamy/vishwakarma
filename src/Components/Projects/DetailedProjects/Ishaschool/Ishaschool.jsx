import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Ishaschool.css';
import NavBar from '../../../Navbar/Navbar';
import isha1 from '../DetailProjectpageImages/isha1.webp';
import isha2 from '../DetailProjectpageImages/isha2.webp';
import isha4 from '../DetailProjectpageImages/isha4.webp';
import isha5 from '../DetailProjectpageImages/isha5.webp';
import isha6 from '../DetailProjectpageImages/isha6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P21.webp'
import otherproject2 from '../../Project-images/P22.webp'
import otherproject3 from '../../Project-images/P2.webp'
import { useTranslation } from 'react-i18next';

const Ishaschool = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <img className='Ishaschool1' src={isha1} alt="" />
       <img className='Ishaschool2' src={isha2} alt="" />
      </div>
      <div className="second-container-detailpage-Ishaschool">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <img className='Ishaschool4' src={isha4} alt="" />
        <img className='Ishaschool5' src={isha5} alt="" />
        <img className='Ishaschool6' src={isha6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('ishaschool')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('ishaschool-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('ishaschool-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('ishaschool-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('ishaschool-Location')}</h6>
            <p>{t('ishaschool-para')}
            </p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <img className='plus-img' src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
         
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
                <Link to="/project/21"><img className='other-project-img' src={otherproject1} alt="Project 21" /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/22"><img className='other-project-img' src={otherproject2} alt="Project 22" /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/2"><img className='other-project-img' src={otherproject3} alt="Project 2" /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Ishaschool;



