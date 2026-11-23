import React, { useEffect } from 'react';
import './Projectmain.css';
import NavBar from '../Navbar/Navbar';
import Gallery from './Gallery';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom'; 

import './Searchbar/SearchBar.css';
import SearchBar from './Searchbar/SearchBar';

const Projectmain = () => {
  const { t } = useTranslation('global');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const [isSearchVisible, setIsSearchVisible] = useState(false);

  // const handleSearchToggle = () => {
  //   setIsSearchVisible(!isSearchVisible);
  // };
  return (
    <div>
      <NavBar className="project-custom-navbar" />
      
      
      {/* Project Header with Dropdown */}
        <SearchBar/>
      <div className="project-header-container">
        <h1 className="project-head">{t('Projects')}</h1>
        {/* Dropdown Search Bar */}
        <div className="dropdown-search">
       
          
        {/* <form
        action="https://www.google.com/search"
        className={`search ${isSearchVisible ? "show-search" : ""}`}
        id="search-bar"
      >
        <input
          type="search"
          placeholder="Type something..."
          name="q"
          className="search__input"
        />

        <div className="search__button" id="search-button" onClick={handleSearchToggle}>
          <i className="ri-search-2-line search__icon"></i>
          <img className="search__close" src={logos} alt="Close Icon" />
        </div>
      </form> */}
          {/* {filteredProjects.length > 0 && (
            <ul className="dropdown-list">
              {filteredProjects.map((project, index) => (
                <li key={index} className="dropdown-item">
                 
                  <Link className='dropdown-filter-name' to={`/project/${project.id}`}>
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>

      <Gallery />
    </div>
  );
};

export default Projectmain;
