import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Actcall.css';
import NavBar from '../../../Navbar/Navbar';
import Actcal1 from '../DetailProjectpageImages/Act1.webp';
import Actcal2 from '../DetailProjectpageImages/Act2.webp';
import Actcal4 from '../DetailProjectpageImages/Act4.webp';
import Actcal5 from '../DetailProjectpageImages/Act5.webp';
import Actcal6 from '../DetailProjectpageImages/Act6.webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P20.webp';
import otherproject2 from '../../Project-images/P1.webp';
import otherproject3 from '../../Project-images/P10.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Actcall = () => {
  const { t } = useTranslation('global');
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <NavBar className="project-custom-navbar" />
      <div className="detail-page">
        <LazyLoadImage className='Actcal1' src={Actcal1} alt="" />
        <LazyLoadImage className='Actcal2' src={Actcal2} alt="" />
      </div>
      <div className="second-container-detailpage-Actcal"></div>
      <div className="detail-page-contain3 container-fluid">
        <LazyLoadImage className='Actcal4' src={Actcal4} alt="" />
        <LazyLoadImage className='Actcal5' src={Actcal5} alt="" />
        <LazyLoadImage className='Actcal6' src={Actcal6} alt="" />
      </div>
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            <h2>{t('Actcall')}</h2>
            <h6>{t('Typology')}<span className='specialcharacter'>- </span>{t('Actcall')}</h6>
            <h6>{t('Year')}<span className='specialcharacter'>- </span>{t('Actcall-year')}</h6>
            <h6>{t('Area')}<span className='specialcharacter'>- </span>{t('Actcall-area')}</h6>
            <h6>{t('Location')}<span className='specialcharacter'>- </span>{t('Actcall-Location')}</h6>
            <p>{t('Actcall-para')}</p>
          </div>
        </div>
      </div>
      <div className="otherprojects-contain container-fluid">
        <div className='other-head'>
          <LazyLoadImage className='plus-img' src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/20"><LazyLoadImage className='other-project-img' src={otherproject1} alt="" /></Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/1"><LazyLoadImage className='other-project-img' src={otherproject2} alt="" /></Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/10"><LazyLoadImage className='other-project-img' src={otherproject3} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actcall;
