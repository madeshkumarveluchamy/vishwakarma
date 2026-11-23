import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AModernSanctuary.css';
import NavBar from '../../../Navbar/Navbar';
import sanctuary1 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (1).webp';
import sanctuary2 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (2).webp';
import sanctuary3 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (3).webp';
import sanctuary4 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (4).webp';
import sanctuary5 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (5).webp';
import sanctuary6 from '../../Project-images/A-Modern-Sanctuary/A-Modern-Sanctuary (6).webp';
import plus from '../DetailProjectpageImages/plus.webp';
import otherproject1 from '../../Project-images/P-38.webp';
import otherproject2 from '../../Project-images/P-39.webp';
import otherproject3 from '../../Project-images/P-40.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AModernSanctuary = () => {
  const { t } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="modern-sanctuary-container">
      <NavBar className="project-custom-navbar" />

      {/* Row 1: Image 1 (38% width) & Image 2 (62% width) Side-by-Side (Same Height) */}
      <div className="detail-page">
        <LazyLoadImage
          className="AModernSanctuary1"
          src={sanctuary1}
          alt="A Modern Sanctuary - 1"
        />
        <LazyLoadImage
          className="AModernSanctuary2"
          src={sanctuary2}
          alt="A Modern Sanctuary - 2"
        />
      </div>

      {/* Row 2: Image 3 Full Width Panorama Banner (100vh Full Screen Height) */}
      <div
        className="second-container-detailpage-AModernSanctuary"
        style={{ backgroundImage: `url("${sanctuary3}")` }}
      ></div>

      {/* Row 3: Image 4 (41.5%), Image 5 (17% narrow center), Image 6 (41.5%) (Same Height) */}
      <div className="detail-page-contain3 container-fluid px-0">
        <LazyLoadImage
          className="AModernSanctuary4"
          src={sanctuary4}
          alt="A Modern Sanctuary - 4"
        />
        <LazyLoadImage
          className="AModernSanctuary5"
          src={sanctuary5}
          alt="A Modern Sanctuary - 5"
        />
        <LazyLoadImage
          className="AModernSanctuary6"
          src={sanctuary6}
          alt="A Modern Sanctuary - 6"
        />
      </div>

      {/* Row 4: Project Info Section */}
      <div className="container-fluid info-contain mt-1">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5 detailproject-col">
            <h2>{t('amodernsanctuary')}</h2>
            <h6>
              {t('Typology')} <span className="specialcharacter">- </span> {t('amodernsanctuary-typology')}
            </h6>
            <h6>
              {t('Year')} <span className="specialcharacter">- </span> {t('amodernsanctuary-year')}
            </h6>
            <h6>
              {t('Area')} <span className="specialcharacter">- </span> {t('amodernsanctuary-area')}
            </h6>
            <h6>
              {t('Location')} <span className="specialcharacter">- </span> {t('amodernsanctuary-Location')}
            </h6>
            <p>{t('amodernsanctuary-para')}</p>
          </div>
        </div>
      </div>

      {/* Row 5: Other Projects Section */}
      <div className="otherprojects-contain container-fluid">
        <div className="other-head">
          <LazyLoadImage className="plus-img" src={plus} alt="Plus Icon" />
          {t('other-projects')}
        </div>
        <div className="row otherproject-row justify-content-start mt-2">
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/38">
              <LazyLoadImage
                className="other-project-img"
                src={otherproject1}
                alt="Other Project 38"
              />
            </Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/39">
              <LazyLoadImage
                className="other-project-img"
                src={otherproject2}
                alt="Other Project 39"
              />
            </Link>
          </div>
          <div className="col-10 col-sm-10 col-md-4 col-xl-4 otherprojects">
            <Link to="/project/40">
              <LazyLoadImage
                className="other-project-img"
                src={otherproject3}
                alt="Other Project 40"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AModernSanctuary;
