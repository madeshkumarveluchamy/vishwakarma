import React, { useState } from "react";
import "./SearchBar.css";
import logos from "../../images/logo.webp";
import search from "../../images/search.png";
import { galleryItems } from '../Gallery'; // Correct import
import { Link } from 'react-router-dom';
import '../Projectmain.css';

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue.trim() !== '') {
      // Filter projects where the name contains the search term (case-insensitive)
      const filtered = galleryItems.filter(project =>
        project.name && project.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("Filtered Projects:", filtered); // Debugging line
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects([]);
    }
  };

  return (
    <>
      <div className="search-container">
        <form
          className={`search ${isSearchVisible ? "show-search" : ""}`}
          id="search-bar"
        >
          <input
            type="search"
            placeholder="Type something..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search__input"
          />
          
          <div className="search__button" id="search-button" onClick={handleSearchToggle}>
            <img className="search__icon" src={search} alt="Search Icon" />
            <img className="search__close" src={logos} alt="Close Icon" />
          </div>
        </form>
        
        {/* Dropdown List */}
        {filteredProjects.length > 0 && (
          <ul className="dropdown-list">
            {filteredProjects.map((project) => (
              <li key={project.id} className="dropdown-item">
                <Link className='dropdown-filter-name' to={`/project/${project.id}`}>
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
