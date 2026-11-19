import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling
import { useTranslation } from 'react-i18next';

const NavBar = ({ className }) => {
  const { t } = useTranslation('global');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">{t('VISHWAKARMA')}</NavLink>
        </div>
        <div className={`navbar-links-container ${isOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('Home')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('About')}
            </NavLink>
            <NavLink to="/Team" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('Team')}
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('Services')}
            </NavLink>
            <NavLink to="/projectmain" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('Projects')}
            </NavLink>
            <NavLink to="http://turyadesigns.in/" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('Turya')}
            </NavLink>
            <NavLink to="/journal" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('Journal')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('Contact')}
            </NavLink>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
