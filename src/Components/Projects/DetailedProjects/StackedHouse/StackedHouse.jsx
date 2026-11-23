import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StackedHouse.css';
import NavBar from '../../../Navbar/Navbar';
import stacked1 from '../../Project-images/Stacked House/STACKED HOUSE (1).webp';
import stacked2 from '../../Project-images/Stacked House/STACKED HOUSE (2).webp';
import stacked3 from '../../Project-images/Stacked House/STACKED HOUSE (3).webp';
import stacked4 from '../../Project-images/Stacked House/STACKED HOUSE (4).webp';
import stacked5 from '../../Project-images/Stacked House/STACKED HOUSE (5).webp';
import stacked6 from '../../Project-images/Stacked House/STACKED HOUSE (6).webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-38.webp';
import otherproject2 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (1).webp';
import otherproject3 from '../../Project-images/P-40.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StackedHouse = () => {
  const { t } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="stacked-house-container">
      <NavBar className="project-custom-navbar" />

      {/* Row 1: Two Landscape Images Side-by-Side (Full Bleed) */}
      <div className="detail-page">
        <LazyLoadImage
          className="StackedHouse1"
          src={stacked1}
          alt="Stacked House Bedroom"
        />
        <LazyLoadImage
          className="StackedHouse2"
          src={stacked2}
          alt="Stacked House Courtyard"
        />
      </div>

      {/* Row 2: Full Width Panorama Banner (100vh Full Screen Height) */}
      <div
        className="second-container-detailpage-StackedHouse"
        style={{ backgroundImage: `url("${stacked3}")` }}
      ></div>

      {/* Row 3: Three Portrait Images (Equal Proportions, Full Bleed) */}
      <div className="detail-page-contain3 container-fluid px-0">
        <LazyLoadImage
          className="StackedHouse4"
          src={stacked4}
          alt="Stacked House Swing and Partition"
        />
        <LazyLoadImage
          className="StackedHouse5"
          src={stacked5}
          alt="Stacked House Staircase"
        />
        <LazyLoadImage
          className="StackedHouse6"
          src={stacked6}
          alt="Stacked House Exterior Architecture"
        />
      </div>

      {/* Row 4: Project Info Section */}
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            <h2>{t('stackedhouse')}</h2>
            <h6>
              {t('Typology')} <span className="specialcharacter">- </span> {t('stackedhouse-typology')}
            </h6>
            <h6>
              {t('Year')} <span className="specialcharacter">- </span> {t('stackedhouse-year')}
            </h6>
            <h6>
              {t('Area')} <span className="specialcharacter">- </span> {t('stackedhouse-area')}
            </h6>
            <h6>
              {t('Location')} <span className="specialcharacter">- </span> {t('stackedhouse-Location')}
            </h6>
            <p>{t('stackedhouse-para1')}</p>
            <p>{t('stackedhouse-para2')}</p>
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
            <Link to="/project/38">
              <LazyLoadImage className="other-project-img" src={otherproject1} alt="Veedu1" />
            </Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/65">
              <LazyLoadImage className="other-project-img" src={otherproject2} alt="A Modern Sanctuary" />
            </Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/40">
              <LazyLoadImage className="other-project-img" src={otherproject3} alt="Veedu3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedHouse;
