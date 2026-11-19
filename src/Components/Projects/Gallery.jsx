import React, { lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import GalleryFilter from './GalleryFilter';
import './Gallery.css';
import Project1 from './Project-images/P1.webp';
import Project2 from './Project-images/P2.webp';
import Project3 from './DetailedProjects/DetailProjectpageImages/summerhousekey.webp';
import Project4 from './Project-images/P4.webp';
import Project5 from './DetailedProjects/DetailProjectpageImages/yarnhousekey.webp';
import Project6 from './DetailedProjects/DetailProjectpageImages/mootramhousekey.webp';
import Project7 from './Project-images/P7.webp';
import Project8 from './Project-images/P8.webp';
import Project9 from './Project-images/P9.webp';
import Project10 from './DetailedProjects/DetailProjectpageImages/nalanda.webp';
import Project11 from './Project-images/P11.webp';
import Project12 from './Project-images/P12.webp';
import Project13 from './Project-images/P13.webp';
import Project14 from './Project-images/P14.webp';
import Project15 from './Project-images/donut-saibaba-key.webp';
import Project16 from './Project-images/P16.webp';
import Project17 from './DetailedProjects/DetailProjectpageImages/Attangudi3.webp';
import Project18 from './DetailedProjects/DetailProjectpageImages/Villanunc3.webp';
import Project19 from './Project-images/P19.webp';
import Project20 from './Project-images/P20.webp';
import Project21 from './Project-images/P21.webp';
import Project22 from './Project-images/P22.webp';
import Project23 from './Project-images/P23.webp';
import Project24 from './Project-images/P24.webp';
import Project25 from './Project-images/P25.webp';
import Project26 from './Project-images/P26.webp';
import Project27 from './DetailedProjects/DetailProjectpageImages/Spmkadri3.webp';
import Project28 from './DetailedProjects/DetailProjectpageImages/Beryl3.webp';
import Project29 from './Project-images/P29.webp';
import Project30 from './DetailedProjects/DetailProjectpageImages/cottonblossomkey.webp';
import Project31 from './DetailedProjects/DetailProjectpageImages/Isaiveedu3.webp';
import Project32 from './Project-images/P32.webp';
import Project33 from './DetailedProjects/DetailProjectpageImages/oculuskey.webp';
import Project34 from './DetailedProjects/DetailProjectpageImages/sepiahouse.webp';
import Project35 from './Project-images/P35.webp';
import Project36 from './Project-images/P36.webp';
import Project37 from './DetailedProjects/DetailProjectpageImages/victoriankey.webp';
import Project38 from './DetailedProjects/DetailProjectpageImages/Veedu1-3.webp';
import Project39 from './Project-images/P-39.webp';
import Project40 from './Project-images/P-40.webp';
import Project41 from './DetailedProjects/DetailProjectpageImages/Veedu4-1.webp';
import Project42 from './DetailedProjects/DetailProjectpageImages/Veedu5-6.webp';
import Project43 from './Project-images/P-43.webp';
import Project44 from './DetailedProjects/DetailProjectpageImages/Veedu7-3.webp';
import Project45 from './Project-images/P45.webp';
import Project46 from './Project-images/P46.webp';
import Project47 from './Project-images/Ananta key.webp';
import Project48 from './Project-images/P48.webp';
import Project49 from './Project-images/donuts-vadavalli-key.webp';
import Project50 from './Project-images/P50.webp';
import Project51 from './Project-images/P51.webp';
import Project52 from './Project-images/P52.webp';
import Project53 from './Project-images/mahapalace-key.webp';
import Project54 from './Project-images/P54.webp';
import Project55 from './Project-images/Pralochnaold-key.webp';
import Project56 from './Project-images/purplebay-key.webp';
import Project57 from './Project-images/P57.webp';
import Project58 from './Project-images/soupsaladttk-key.webp';
import Project59 from './Project-images/P-59.webp';
import Project60 from './DetailedProjects/DetailProjectpageImages/chiarkey.webp';
import Project61 from './DetailedProjects/DetailProjectpageImages/vasavikey.webp';
import Project62 from './Project-images/P62.webp';
import Project63 from './DetailedProjects/DetailProjectpageImages/Ksir3.webp'
import Project64 from './DetailedProjects/DetailProjectpageImages/balledoftime3.webp'

import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Define galleryItems outside the component
const galleryItems = [
  { id: 1, category: 'COMMERCIAL', name: "Kayal", LazyLoadImage: Project1, loading:"lazy" },
  { id: 10, category: 'COMMERCIAL', name:"Nalanda Times Building", LazyLoadImage: Project10, loading:"lazy" },
  { id: 19, category: 'COMMERCIAL', name:"Act Centre", LazyLoadImage: Project19, loading:"lazy" },
  { id: 20, category: 'COMMERCIAL', name:"Tree Of Life", LazyLoadImage: Project20, loading:"lazy" },

  { id: 21, category: 'DEVELOPMENT', name:"Mahilampoo", LazyLoadImage: Project21, loading:"lazy" },
  { id: 22, category: 'DEVELOPMENT', name:"Malli", LazyLoadImage: Project22, loading:"lazy" },

  { id: 2, category: 'FACTORY', name:"Century Apparels", LazyLoadImage: Project2, loading:"lazy" },
  { id: 23, category: 'FACTORY', name:"JJmills", LazyLoadImage: Project23, loading:"lazy" },

  { id: 9, category: 'INSTUTIONAL', name:"Spring Mount School", LazyLoadImage: Project9, loading:"lazy" },
  { id: 63, category: 'INSTUTIONAL', name:"KSIRS School", LazyLoadImage: Project63, loading:"lazy" },

  { id: 3, category: 'RESIDENTIAL', name:"Summer House", LazyLoadImage: Project3, loading:"lazy" },
  { id: 4, category: 'RESIDENTIAL', name:"Color House", LazyLoadImage: Project4, loading:"lazy" },
  { id: 5, category: 'RESIDENTIAL', name:"Yarn House", LazyLoadImage: Project5, loading:"lazy" },
  { id: 6, category: 'RESIDENTIAL', name:"Mootram House", LazyLoadImage: Project6, loading:"lazy" },
  { id: 7, category: 'RESIDENTIAL', name:"Light House", LazyLoadImage: Project7, loading:"lazy" },
  { id: 8, category: 'RESIDENTIAL', name:"Stack House", LazyLoadImage: Project8, loading:"lazy" },
  { id: 12, category: 'RESIDENTIAL', name:"House Of Earthen Hues", LazyLoadImage: Project12, loading:"lazy" },
  { id: 17, category: 'RESIDENTIAL', name:"Attangudi Veedu", LazyLoadImage: Project17, loading:"lazy" },
  { id: 18, category: 'RESIDENTIAL', name:"Villa Nunc", LazyLoadImage: Project18, loading:"lazy" },
  { id: 28, category: 'RESIDENTIAL', name:"Beryl House", LazyLoadImage: Project28, loading:"lazy" },
  { id: 29, category: 'RESIDENTIAL', name:"Circular House", LazyLoadImage: Project29, loading:"lazy" },
  { id: 30, category: 'RESIDENTIAL', name:"Cotton Blossom Residence", LazyLoadImage: Project30, loading:"lazy" },
  { id: 31, category: 'RESIDENTIAL', name:"Isai Veedu", LazyLoadImage: Project31, loading:"lazy" },
  // { id: 32, category: 'RESIDENTIAL', LazyLoadImage: Project32, loading:"lazy" },
  { id: 33, category: 'RESIDENTIAL', name:"Oculus House", LazyLoadImage: Project33, loading:"lazy" },
  { id: 34, category: 'RESIDENTIAL', name:"Sepia House", LazyLoadImage: Project34, loading:"lazy" },
  { id: 35, category: 'RESIDENTIAL', name:"Terra House", LazyLoadImage: Project35, loading:"lazy" },
  { id: 36, category: 'RESIDENTIAL', name:"Tree Of Life House", LazyLoadImage: Project36, loading:"lazy" },
  { id: 37, category: 'RESIDENTIAL', name:"Victorian House", LazyLoadImage: Project37, loading:"lazy" },
  { id: 38, category: 'RESIDENTIAL', name:"Veedu1", LazyLoadImage: Project38, loading:"lazy" },
  { id: 39, category: 'RESIDENTIAL', name:"Veedu2", LazyLoadImage: Project39, loading:"lazy" },
  { id: 40, category: 'RESIDENTIAL', name:"Veedu3", LazyLoadImage: Project40, loading:"lazy" },
  { id: 41, category: 'RESIDENTIAL', name:"Veedu4", LazyLoadImage: Project41, loading:"lazy" },
  { id: 42, category: 'RESIDENTIAL', name:"Veedu5", LazyLoadImage: Project42, loading:"lazy" },
  { id: 43, category: 'RESIDENTIAL', name:"Veedu6", LazyLoadImage: Project43, loading:"lazy" },
  { id: 44, category: 'RESIDENTIAL', name:"Veedu7", LazyLoadImage: Project44, loading:"lazy" },
  { id: 62, category: 'RESIDENTIAL', name:"Veedu8", LazyLoadImage: Project62, loading:"lazy" },
  { id: 60, category: 'RESIDENTIAL', name:"Chiaroscuro House", LazyLoadImage: Project60, loading:"lazy" },
  { id: 64, category: 'RESIDENTIAL', name:"The Balled of time", LazyLoadImage: Project64, loading:"lazy" },

  { id: 11, category: 'OFFICE', name:"Texmo", LazyLoadImage: Project11, loading:"lazy" },
  { id: 14, category: 'OFFICE', name:"Elgi Office", LazyLoadImage: Project14, loading:"lazy" },
  { id: 24, category: 'OFFICE', name:"LNB Jewellers", LazyLoadImage: Project24, loading:"lazy" },
  { id: 25, category: 'OFFICE', name:"Precot Corporate Office", LazyLoadImage: Project25, loading:"lazy" },
  { id: 26, category: 'OFFICE', name:"Pricol", LazyLoadImage: Project26, loading:"lazy" },
  { id: 27, category: 'OFFICE', name:"SPM Kadri Mills", LazyLoadImage: Project27, loading:"lazy" },
  
  { id: 15, category: 'RETAIL', name:"Donuts", LazyLoadImage: Project15, loading:"lazy" },
  { id: 16, category: 'RETAIL', name:"Donuts", LazyLoadImage: Project16, loading:"lazy" },
  { id: 45, category: 'RETAIL', name:"Avathar Jewellers", LazyLoadImage: Project45, loading:"lazy" },
  { id: 46, category: 'RETAIL', name:"Adams Tailor", LazyLoadImage: Project46, loading:"lazy" },
  { id: 47, category: 'RETAIL', name:"Ananta Boutique", LazyLoadImage: Project47, loading:"lazy" },
  { id: 48, category: 'RETAIL', name:"Cool Cooper", LazyLoadImage: Project48, loading:"lazy" },
  { id: 49, category: 'RETAIL', name:"Donuts", LazyLoadImage: Project49, loading:"lazy" },
  { id: 50, category: 'RETAIL', name:"Garment Nook", LazyLoadImage: Project50, loading:"lazy" },
  { id: 51, category: 'RETAIL', name:"Isha Life", LazyLoadImage: Project51, loading:"lazy" },
  { id: 52, category: 'RETAIL', name:"Kota Jewellers", LazyLoadImage: Project52, loading:"lazy" },
  { id: 53, category: 'RETAIL', name:"Maha Fitness", LazyLoadImage: Project53, loading:"lazy" },
  { id: 54, category: 'RETAIL', name:"Prolachna Apparels", LazyLoadImage: Project54, loading:"lazy" },
  { id: 55, category: 'RETAIL', name:"Prolachna Apparels", LazyLoadImage: Project55, loading:"lazy" },
  { id: 56, category: 'RETAIL', name:"Purple Bay", LazyLoadImage: Project56, loading:"lazy" },
  { id: 57, category: 'RETAIL', name:"Soup and Salad", LazyLoadImage: Project57, loading:"lazy" },
  { id: 58, category: 'RETAIL', name:"Soup and Salad", LazyLoadImage: Project58, loading:"lazy" },
  { id: 59, category: 'RETAIL', name:"Bharani Silks", LazyLoadImage: Project59, loading:"lazy" },
  
  
  { id: 61, category: 'SACREDSPACES', name:"Vasavi Temple", LazyLoadImage: Project61, loading:"lazy" },

];

const Gallery = () => {
  const { t } = useTranslation('global');

  // Translate the category names
  const categoryNames = {
    ALL: t('All'),
    RESIDENTIAL: t('RESIDENTIAL'),
    COMMERCIAL: t('COMMERCIAL'),
    INSTUTIONAL: t('INSTUTIONAL'),
    RETAIL: t('RETAIL'),
    OFFICE: t('OFFICE'),
    FACTORY: t('FACTORY'),
    DEVELOPMENT: t('DEVELOPMENT'),
    SACREDSPACES: t('SACREDSPACES'),
  };

  // Update galleryItems to use translated category names
  const translatedGalleryItems = galleryItems.map(item => ({
    ...item,
    category: categoryNames[item.category],
  }));

  const [selectedFilter, setSelectedFilter] = useState(categoryNames.ALL);
  const filters = Object.values(categoryNames);

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredItems = selectedFilter === categoryNames.ALL
    ? translatedGalleryItems
    : translatedGalleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="gallery-container">
      <GalleryFilter filters={filters} selectedFilter={selectedFilter} onSelectFilter={handleSelectFilter} />
      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-item">
            <Link to={`/project/${item.id}`}>
              <LazyLoadImage src={item.LazyLoadImage} alt={item.category} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
export { galleryItems };
