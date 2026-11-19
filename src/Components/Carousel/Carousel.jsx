import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/Logo.jpg';
import img2 from '../images/Summerhouse.webp';
import img3 from '../images/kayal.webp';
import img4 from '../images/Yarnhouse.webp';
import img5 from '../images/Lighthouse.webp';
import img6 from '../images/Mootramveedu.webp';
import img7 from '../images/balledoftime3.webp';
import './Carousel.css';
import NavBar from '../Navbar/Navbar'; 
import { useTranslation } from 'react-i18next';

const Carousel = () => {
  const { t, i18n } = useTranslation('global'); 

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleSlideChange = () => {
      const activeSlide = document.querySelector('.carousel-item.active');
      const body = document.body;
      if (activeSlide) {
        if (activeSlide.id === 'slide1') {
          body.classList.add('first-slide-active');
        } else {
          body.classList.remove('first-slide-active');
        }
      }
    };

    const carousel = document.querySelector('#carouselExampleControls');
    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', handleSlideChange);

      // Initial call to set the navbar color based on the initial active slide
      handleSlideChange();

      // Cleanup event listener on component unmount
      return () => {
        carousel.removeEventListener('slid.bs.carousel', handleSlideChange);
      };
    }
  }, []);

  return (
    <div className={`journal-root ${i18n.language === 'ta' ? 'tamil-language' : ''}`}>
    <div className='landing-page' id='home'>
      <NavBar className="navbar-landing" />
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" id="slide1">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-overlay"></div>
          </div>
         
          <div className="carousel-item" id="slide2">      
            <Link to='/project/3'>  
              <img src={img2} className="d-block w-100" alt="Summerhouse" />           
              <div className="carousel-overlay"></div>
            </Link>
          </div>
         
          <div className="carousel-item" id="slide3">
            <Link to="/project/1">
              <img src={img3} className="d-block w-100" alt="Kayal" />
              <div className="carousel-overlay"></div>
            </Link>
          </div>
          
          <div className="carousel-item" id="slide4">
            <Link to='/project/5'>
              <img src={img4} className="d-block w-100" alt="Yarnhouse" />
              <div className="carousel-overlay"></div>
            </Link>
          </div>
          
          <div className="carousel-item" id="slide5">
            <Link to='/project/7'>
              <img src={img5} className="d-block w-100" alt="Lighthouse" />
              <div className="carousel-overlay"></div>
            </Link>
          </div>
          
          <div className="carousel-item" id="slide6">
            <Link to='/project/6'>
              <img src={img6} className="d-block w-100" alt="Mootramveedu" />
              <div className="carousel-overlay"></div>
            </Link>
          </div>

          <div className="carousel-item" id="slide6">
            <Link to='/project/64'>
              <img src={img7} className="d-block w-100" alt="Balled of Time" />
              <div className="carousel-overlay"></div>
            </Link>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="language-options">
        <a href="#" onClick={() => changeLang('en')}>Eng</a>|
        <a href="#" onClick={() => changeLang('ta')}>தமிழ்</a>
      </div>
      <div className="social-media-icons">
        <a href="https://www.facebook.com/p/Vishwakarma-Design-Studio-100064057144718/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="mailto:info@vkdesigns.in" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
        <a href="https://www.instagram.com/vishwakarmadesignstudio?igsh=MWltajhkZDFkZWgwOA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/vishwakarma-design-studio/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    </div>
  );
};

export default Carousel;