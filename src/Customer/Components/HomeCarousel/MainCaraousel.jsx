import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaraouselData } from './MainCaraouselData';


const MainCaraousel = () => {
    const items = MainCaraouselData.map(
        (item)=> 
        <img className='cursor-pointer' 
         src={item.image} role='presentation' alt=""/>)

    // const navigate = useNavigate

   return (
   <AliceCarousel
        // mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />)
};

export default MainCaraousel;