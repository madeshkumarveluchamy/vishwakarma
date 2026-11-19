import React from "react";
import "./Loader.css";
import weddingloader from './images/Animation - 1723786756791.gif'; 

const Loader = () => {
  return (
    <div className="loader">
      <div className="img-wrapper">
        <img 
          src={weddingloader}
          alt="Custom Wedding Gif" 
          className="loader-image"
        />
      </div>
    </div>
  );
};

export default Loader;