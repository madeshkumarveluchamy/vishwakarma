import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Insideout.css';
import Carousel from 'react-bootstrap/Carousel';
import insideout1 from './images/Qwicksoft-Inside Outside-Residence0001.webp'
import insideout2 from './images/Qwicksoft-Inside Outside-Residence0002.webp'
import insideout3 from './images/Qwicksoft-Inside Outside-Residence0003.webp'
import insideout4 from './images/Qwicksoft-Inside Outside-Residence0004.webp'
import insideout5 from './images/Qwicksoft-Inside Outside-Residence0005.webp'
import insideout6 from './images/Qwicksoft-Inside Outside-Residence0006.webp'
import insideout7 from './images/Qwicksoft-Inside Outside-Residence0007.webp'
import insideout8 from './images/Qwicksoft-Inside Outside-Residence0008.webp'
import insideout9 from './images/Qwicksoft-Inside Outside-Residence0009.webp'
import insideout10 from './images/Qwicksoft-Inside Outside-Residence0010.webp'
import { useTranslation } from 'react-i18next'; 

const Insideout = () => {
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
        <div className="inner-container-insideout">
        <div className="reg-text insideout-headtext">
                        <h3>{t('journal-publication1-head-insideout')}</h3>
                         <h3>12/01/07</h3>
                     </div>
        </div>
        <div className="insideout-container2">
        <Carousel data-bs-theme="dark" className="text-center" indicators={false}>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout4}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout5}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout6}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout7}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout8}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout9}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={insideout10}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

        </div>
      </div>
    </div>
  )
}

export default Insideout