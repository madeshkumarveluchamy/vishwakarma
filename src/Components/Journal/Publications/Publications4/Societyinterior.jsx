import React, { useEffect }  from 'react'
import NavBar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Societyinterior.css';
import Carousel from 'react-bootstrap/Carousel';
import Societyinterior1 from './images/0.webp'
import Societyinterior2 from './images/1.webp'
import Societyinterior3 from './images/2.webp'
import Societyinterior4 from './images/3.webp'
import Societyinterior5 from './images/4.webp'
import Societyinterior6 from './images/5.webp'
import Societyinterior7 from './images/7.webp'
import Societyinterior8 from './images/8.webp'
import { useTranslation } from 'react-i18next'; 


const Societyinterior = () => {
       const { t } = useTranslation('global')
  
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
        <div className="inner-container-Societyinterior">
        <div className="reg-text Societyinterior-headtext">
                        <h3>{t('journal-publication4-head-societyinterior')}</h3>
                         <h3>01/01/09</h3>
                     </div>
        </div>
        <div className="Societyinterior-container2">
        <Carousel data-bs-theme="dark" className="text-center" indicators={false}>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior4}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior5}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior6}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior7}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto"
      src={Societyinterior8}
      alt="Third slide"
    />
  </Carousel.Item>
 
</Carousel>

        </div>
      </div>
    </div>
  )
}

export default Societyinterior