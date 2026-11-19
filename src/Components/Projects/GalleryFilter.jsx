import React from 'react';
import { useTranslation } from 'react-i18next';
const GalleryFilter = ({ filters, selectedFilter, onSelectFilter }) => {
  const { t} = useTranslation('global');
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
