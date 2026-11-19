import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Interiorexterior.css';
import Carousel from 'react-bootstrap/Carousel';
import interiorexterior1 from './images/VISHWAKARMA DESIGN STUDIO-1.webp'
import interiorexterior2 from './images/VISHWAKARMA DESIGN STUDIO-2.webp'
import interiorexterior3 from './images/VISHWAKARMA DESIGN STUDIO-3.webp'
import interiorexterior4 from './images/VISHWAKARMA DESIGN STUDIO-4.webp'
import interiorexterior5 from './images/VISHWAKARMA DESIGN STUDIO-5.webp'
import { useTranslation } from 'react-i18next'; 

const Interiorexterior = () => {
      const { t, i18n } = useTranslation('global');
  
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
        <div className="inner-container-interiorexterior">
        <div className="reg-text interiorexterior-headtext">
                        <h3>{t('journal-publication2-head-interior')}</h3>
                         <h3>10/07/24</h3>
                     </div>
        </div>
        <div className="interiorexterior-container2">
        <Carousel data-bs-theme="dark" className="text-center" indicators={false}>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior4}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={interiorexterior5}
      alt="Third slide"
    />
  </Carousel.Item>
 
</Carousel>

        </div>
      </div>
    </div>
  )
}

export default Interiorexterior