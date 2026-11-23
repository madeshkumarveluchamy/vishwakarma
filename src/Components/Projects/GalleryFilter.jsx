import React from 'react';

const GalleryFilter = ({ filters, selectedFilter, onSelectFilter }) => {
  return (
    <div className="gallery-filter">
      {filters.map(filter => (
        <button
          key={filter}
          className={filter === selectedFilter ? 'active' : ''}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
