import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SPMKadriMills.css';
import NavBar from '../../../Navbar/Navbar';
import SPMKadri1 from '../DetailProjectpageImages/Spmkadri1.webp';
import SPMKadri2 from '../DetailProjectpageImages/Spmkadri2.webp';
import SPMKadri4 from '../DetailProjectpageImages/Spmkadri4.webp';
import SPMKadri5 from '../DetailProjectpageImages/Spmkadri5.webp';
import SPMKadri6 from '../DetailProjectpageImages/Spmkadri6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P11.webp';
import otherproject2 from '../../Project-images/P14.webp';
import otherproject3 from '../../Project-images/P24.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SPMKadrimills = () => {
  const { t} = useTranslation('global');
    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='SPMKadriMills1' src={SPMKadri1} alt="" />
       <LazyLoadImage className='SPMKadriMills2' src={SPMKadri2} alt="" />
      </div>
      <div className="second-container-detailpage-SPMKadriMills">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='SPMKadriMills4' src={SPMKadri4} alt="" />
        <LazyLoadImage className='SPMKadriMills5' src={SPMKadri5} alt="" />
        <LazyLoadImage className='SPMKadriMills6' src={SPMKadri6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('spmkadri')} </h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span> {t('spmkadri-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('spmkadri-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span> {t('spmkadri-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span> {t('spmkadri-Location')}</h6>
            <p>{t('spmkadri-para')}
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
                <Link to="/project/11"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/14"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/24"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default SPMKadrimills;



