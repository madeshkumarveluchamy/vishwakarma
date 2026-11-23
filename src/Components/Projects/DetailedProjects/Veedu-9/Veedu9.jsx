import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Veedu9.css';
import NavBar from '../../../Navbar/Navbar';
import veedu9_1 from '../../Project-images/Veedu #9/Veedu 9 (1).webp';
import veedu9_2 from '../../Project-images/Veedu #9/Veedu 9 (2).webp';
import veedu9_3 from '../../Project-images/Veedu #9/Veedu 9 (3).webp';
import veedu9_4 from '../../Project-images/Veedu #9/Veedu 9 (4).webp';
import veedu9_5 from '../../Project-images/Veedu #9/Veedu 9 (5).webp';
import veedu9_6 from '../../Project-images/Veedu #9/Veedu 9 (6).webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/Fluid Harmony/Fluid Harmony (2).webp';
import otherproject2 from '../../Project-images/Stacked House/STACKED HOUSE (6).webp';
import otherproject3 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (1).webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Veedu9 = () => {
  const { t } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="veedu9-container">
      <NavBar className="project-custom-navbar" />

      {/* Row 1: Two Landscape Images Side-by-Side (Full Bleed) */}
      <div className="detail-page">
        <LazyLoadImage
          className="Veedu9Image1"
          src={veedu9_1}
          alt="Veedu #9 Kitchen"
        />
        <LazyLoadImage
          className="Veedu9Image2"
          src={veedu9_2}
          alt="Veedu #9 Bedroom"
        />
      </div>

      {/* Row 2: Full Width Panorama Banner (100vh Full Screen Height) */}
      <div
        className="second-container-detailpage-Veedu9"
        style={{ backgroundImage: `url("${veedu9_3}")` }}
      ></div>

      {/* Row 3: Three Portrait Images (Equal Proportions, Full Bleed) */}
      <div className="detail-page-contain3 container-fluid px-0">
        <LazyLoadImage
          className="Veedu9Image4"
          src={veedu9_4}
          alt="Veedu #9 Swing"
        />
        <LazyLoadImage
          className="Veedu9Image5"
          src={veedu9_5}
          alt="Veedu #9 Elevation"
        />
        <LazyLoadImage
          className="Veedu9Image6"
          src={veedu9_6}
          alt="Veedu #9 Dining"
        />
      </div>

      {/* Row 4: Project Info Section */}
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            <h2>{t('veedu9')}</h2>
            <h6>
              {t('Typology')} <span className="specialcharacter">- </span> {t('veedu9-typology')}
            </h6>
            <h6>
              {t('Year')} <span className="specialcharacter">- </span> {t('veedu9-year')}
            </h6>
            <h6>
              {t('Area')} <span className="specialcharacter">- </span> {t('veedu9-area')}
            </h6>
            <h6>
              {t('Location')} <span className="specialcharacter">- </span> {t('veedu9-Location')}
            </h6>
            <p>{t('veedu9-para')}</p>
          </div>
        </div>
      </div>

      {/* Row 5: Other Projects Section */}
      <div className="otherprojects-contain container-fluid">
        <div className="other-head">
          <LazyLoadImage className="plus-img" src={plus} alt="" /> {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/67">
              <LazyLoadImage className="other-project-img" src={otherproject1} alt="Fluid Harmony" />
            </Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/66">
              <LazyLoadImage className="other-project-img" src={otherproject2} alt="Stacked House" />
            </Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/65">
              <LazyLoadImage className="other-project-img" src={otherproject3} alt="A Modern Sanctuary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veedu9;
