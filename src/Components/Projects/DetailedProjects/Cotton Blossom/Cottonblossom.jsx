import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Cottonblossom.css';
import NavBar from '../../../Navbar/Navbar';
import Cottonblossom1 from '../DetailProjectpageImages/Cottonblossom1.webp';
import Cottonblossom2 from '../DetailProjectpageImages/Cottonblossom2.webp';
import Cottonblossom4 from '../DetailProjectpageImages/Cottonblossom4.webp';
import Cottonblossom5 from '../DetailProjectpageImages/Cottonblossom5.webp';
import Cottonblossom6 from '../DetailProjectpageImages/Cottonblossom6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P31.webp'
import otherproject2 from '../../Project-images/P32.webp'
import otherproject3 from '../../Project-images/P33.webp'
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Cottonblossom = () => {
  const { t} = useTranslation('global');

    const { id } = useParams();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
       <LazyLoadImage className='Cottonblossom1' src={Cottonblossom1} alt="" />
       <LazyLoadImage className='Cottonblossom2' src={Cottonblossom2} alt="" />
      </div>
      <div className="second-container-detailpage-Cottonblossom">
       
      </div>
      <div className="detail-page-contain3  container-fluid">
        
        <LazyLoadImage className='Cottonblossom4' src={Cottonblossom4} alt="" />
        <LazyLoadImage className='Cottonblossom5' src={Cottonblossom5} alt="" />
        <LazyLoadImage className='Cottonblossom6' src={Cottonblossom6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            {/* <h2>{project.category}</h2>
            <p>Project ID - {project.id}</p>
            <p>Description for the project can go here...</p> */}
            <h2>{t('cottonblossom')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('cottonblossom-typology')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span> {t('cottonblossom-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>  {t('cottonblossom-area')}</h6>
            <h6>{t('Location')}  <span className='specialcharacter'>- </span> {t('cottonblossom-Location')}</h6>
            <p>{t('cottonblossom-para')}
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
                <Link to="/project/31"><LazyLoadImage className='other-project-img' src={otherproject1}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/32"><LazyLoadImage className='other-project-img' src={otherproject2}  /> </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/33"><LazyLoadImage className='other-project-img' src={otherproject3}  /> </Link>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Cottonblossom;



