import React from 'react';
import './Contact.css';
// import ic1 from'./Contact-images/insta.png'
// import ic2 from'./Contact-images/mail.png'
// import ic3 from'./Contact-images/fb.png'
import NavBar from '../Navbar/Navbar';
import map from './Contact-images/map.png'
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const { t} = useTranslation('global');
  return (
    <div className='container-fluid'>
       <NavBar className="contact-custom-navbar" />
      <div className='contactus-main-container'>
        <h1 className='main-head'>{t('VISHWAKARMA')}</h1>
      </div>
      <div className='row box'>
        <div className='col-12 col-sm-12 col-md-4 col-xxl-4  box-1'>
          <div className='border-bottom-2 border-dark'><h4 className='Heading-1'>{t('location')}</h4></div>
          <div className='rect'>
           <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Vishwakarma+Design+Studio+%26+Turya+Designs/@10.9677288,76.8888575,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85e9ddda046d7:0xee35f9079bcf854e!8m2!3d10.9677288!4d76.8888575!16s%2Fg%2F11clys_8nr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"> <img className='map' src={map} alt="Location Map" /></a>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-8 col-xxl-8  contact-info border-dark'>
          <h4 className='Heading-2'>{t('contactinfo')}</h4>
          <div className='circle border border-dark'>
            <div className='cont-text'>
            <h4>{t('mail')}<span>info@vkdesigns.in</span></h4>
            {/* <h4>{t('projectenquiries')}<span> <br></br>+91 94437 08136 </span></h4> */}
            <h4 className='pno'>{t('generalenquiries')}<span> <br></br>+91 94426 08126 </span></h4>
            <div className='find-us'>
                <h4>{t('findus')}</h4>
                <div className='imgee'><a href="https://www.facebook.com/p/Vishwakarma-Design-Studio-100064057144718/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/vishwakarmadesignstudio?igsh=MWltajhkZDFkZWgwOA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a><a href="https://www.linkedin.com/company/vishwakarma-design-studio/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
