import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './JJmills.css';
import NavBar from '../../../Navbar/Navbar';
import JJmills1 from '../DetailProjectpageImages/JJmills1.webp';
import JJmills2 from '../DetailProjectpageImages/JJmills2.webp';
import JJmills4 from '../DetailProjectpageImages/JJmills4.webp';
import JJmills5 from '../DetailProjectpageImages/JJmills5.webp';
import JJmills6 from '../DetailProjectpageImages/JJmills6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P9.webp'
import otherproject2 from '../../Project-images/P21.webp'
import otherproject3 from '../../Project-images/P22.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const JJmills = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='JJmills1' src={JJmills1} alt="" />
       <LazyLoadImage className='JJmills2' src={JJmills2} alt="" />
      </div>
      <div className="second-container-detailpage-JJmills">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='JJmills4' src={JJmills4} alt="" />
        <LazyLoadImage className='JJmills5' src={JJmills5} alt="" />
        <LazyLoadImage className='JJmills6' src={JJmills6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('jjmills')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('jjmills-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('jjmills-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>{t('jjmills-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span>{t('jjmills-Location')}</h6>
            <p>{t('jjmills-para')}
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
                <Link to="/project/9"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/13"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/21"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default JJmills;



