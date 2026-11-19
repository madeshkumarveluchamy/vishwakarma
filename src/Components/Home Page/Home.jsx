import React from 'react'
import { useEffect, useState } from "react";
import Loader from '../Loader/Loader';
import About from '../About Us/Aboutus';
import App from '../../App';
import Carousel from '../Carousel/Carousel';



export const Home = () => {

    
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 7500);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (<Loader/>) :
   (
  
    
);

}