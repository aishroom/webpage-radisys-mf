import React from 'react';
import { HeroContainer, HeroTitle } from './styles';
import { heroData } from './Data'; // Importing data from Data.js

const Hero = () => {
  return (
    <HeroContainer>
      <video autoPlay loop muted>
        <source src={heroData.videoSrc} type="video/mp4" />
        {/* Make sure to provide appropriate video formats for compatibility with different browsers */}
      </video>
      <HeroTitle>{heroData.title}</HeroTitle>
      {/* Other components and content here */}
    </HeroContainer>
  );
};

export default Hero;
