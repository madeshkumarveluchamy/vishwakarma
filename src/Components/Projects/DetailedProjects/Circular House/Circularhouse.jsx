import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Circularhouse.css';
import NavBar from '../../../Navbar/Navbar';
import Circularhouse1 from '../DetailProjectpageImages/Circular1.webp';
import Circularhouse2 from '../DetailProjectpageImages/Circular2.webp';
import Circularhouse4 from '../DetailProjectpageImages/Circular4.webp';
import Circularhouse5 from '../DetailProjectpageImages/Circular5.webp';
import Circularhouse6 from '../DetailProjectpageImages/Circular6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P30.webp'
import otherproject2 from '../../Project-images/P31.webp'
import otherproject3 from '../../Project-images/P32.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Circularhouse = () => {
    const { t} = useTranslation('global');

    const { id } = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Circularhouse1' src={Circularhouse1} alt="" />
       <LazyLoadImage className='Circularhouse2' src={Circularhouse2} alt="" />
      </div>
      <div className="second-container-detailpage-Circularhouse">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Circularhouse4' src={Circularhouse4} alt="" />
        <LazyLoadImage className='Circularhouse5' src={Circularhouse5} alt="" />
        <LazyLoadImage className='Circularhouse6' src={Circularhouse6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('circularhouse')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('circularhouse-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('circularhouse-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('circularhouse-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('circularhouse-Location')}</h6>
            <p>{t('circularhouse-para')}
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
                <Link to="/project/30"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/31"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/32"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Circularhouse;



