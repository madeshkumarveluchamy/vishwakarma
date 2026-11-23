import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FluidHarmony.css';
import NavBar from '../../../Navbar/Navbar';
import fluid1 from '../../Project-images/Fluid Harmony/Fluid Harmony (1).webp';
import fluid2 from '../../Project-images/Fluid Harmony/Fluid Harmony (2).webp';
import fluid3 from '../../Project-images/Fluid Harmony/Fluid Harmony (3).webp';
import fluid4 from '../../Project-images/Fluid Harmony/Fluid Harmony (4).webp';
import fluid5 from '../../Project-images/Fluid Harmony/Fluid Harmony (5).webp';
import fluid6 from '../../Project-images/Fluid Harmony/Fluid Harmony (6).webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/Stacked House/STACKED HOUSE (6).webp';
import otherproject2 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (1).webp';
import otherproject3 from '../../Project-images/P-40.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FluidHarmony = () => {
  const { t } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fluid-harmony-container">
      <NavBar className="project-custom-navbar" />

      {/* Row 1: Two Landscape Images Side-by-Side (Full Bleed) */}
      <div className="detail-page">
        <LazyLoadImage
          className="FluidHarmony1"
          src={fluid1}
          alt="Fluid Harmony Living Room"
        />
        <LazyLoadImage
          className="FluidHarmony2"
          src={fluid2}
          alt="Fluid Harmony Entrance"
        />
      </div>

      {/* Row 2: Full Width Panorama Banner (100vh Full Screen Height) */}
      <div
        className="second-container-detailpage-FluidHarmony"
        style={{ backgroundImage: `url("${fluid3}")` }}
      ></div>

      {/* Row 3: Three Portrait Images (Equal Proportions, Full Bleed) */}
      <div className="detail-page-contain3 container-fluid px-0">
        <LazyLoadImage
          className="FluidHarmony4"
          src={fluid4}
          alt="Fluid Harmony Balcony"
        />
        <LazyLoadImage
          className="FluidHarmony5"
          src={fluid5}
          alt="Fluid Harmony Arch Doorway"
        />
        <LazyLoadImage
          className="FluidHarmony6"
          src={fluid6}
          alt="Fluid Harmony Dining Area"
        />
      </div>

      {/* Row 4: Project Info Section */}
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            <h2>{t('fluidharmony')}</h2>
            <h6>
              {t('Typology')} <span className="specialcharacter">- </span> {t('fluidharmony-typology')}
            </h6>
            <h6>
              {t('Year')} <span className="specialcharacter">- </span> {t('fluidharmony-year')}
            </h6>
            <h6>
              {t('Area')} <span className="specialcharacter">- </span> {t('fluidharmony-area')}
            </h6>
            <h6>
              {t('Location')} <span className="specialcharacter">- </span> {t('fluidharmony-Location')}
            </h6>
            <p>{t('fluidharmony-para')}</p>
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
            <Link to="/project/66">
              <LazyLoadImage className="other-project-img" src={otherproject1} alt="Stacked House" />
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

export default FluidHarmony;
