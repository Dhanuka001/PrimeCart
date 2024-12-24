import React from 'react';
import HeroImage from '../assets/hero-image.jpg'
import Search from '../components/Search'
import TrendingProducts from '../components/TrendingProducts';
import InfoSection from '../components/InfoSection';



const Home = () => {
  return (
    <div>
    <div className="flex justify-end lg:p-6">
    	<Search/>
    </div>
    <div>
      <img src={HeroImage} alt="home page hero image" className=" rounded-t-[50px] p-4 "/>
    </div>
    <TrendingProducts className="lg:p-6"/>
    <InfoSection/>
    </div>
  );
};

export default Home;
