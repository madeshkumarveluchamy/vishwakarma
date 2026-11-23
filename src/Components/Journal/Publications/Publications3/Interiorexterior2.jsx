import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Interiorexterior2.css';
import Carousel from 'react-bootstrap/Carousel';
import interiorexterior21 from './images/SUMMER HOUSE-1.webp'
import interiorexterior22 from './images/SUMMER HOUSE-2.webp'
import interiorexterior23 from './images/SUMMER HOUSE-3.webp'
import interiorexterior24 from './images/SUMMER HOUSE-4.webp'
import interiorexterior25 from './images/SUMMER HOUSE-5.webp'
import { useTranslation } from 'react-i18next'; 

const Interiorexterior2 = () => {
      const { t } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
    <NavBar className="project-custom-navbar" />
      <div className="top-text">
         <div className="journal-menu"><Link to="/Journal">{t('journal-menu-all')},</Link> <Link to="/Thoughts">{t('journal-menu-thoughts')},</Link> <Link to="/Recognitions">{t('journal-menu-recognitions')},</Link>  <Link to="/Publications">{t('journal-menu-publications')},</Link> <Link to="/Planning">{t('journal-menu-planning')},</Link> <Link to="/Design">{t('journal-menu-design')}</Link>  </div>
         <h2 className="journal">{t('journal-menu-head')}</h2>
      </div>
      {/* .......................................... Detail Journal page ................................................ */}
      <div className="container-fluid">
        <div className="inner-container-interiorexterior2">
        <div className="reg-text interiorexterior2-headtext">
                        <h3>{t('journal-publication2-head-interior')}</h3>
                         <h3>20/05/23</h3>
                     </div>
        </div>
        <div className="interiorexterior2-container2">
        <Carousel data-bs-theme="dark" className="text-center" indicators={false}>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior21}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior22}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior23}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior24}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior25}
      alt="Third slide"
    />
  </Carousel.Item>
 
</Carousel>

        </div>
      </div>
    </div>
  )
}

export default Interiorexterior2