import React from 'react';
import { InfoContainer, InfoSection, InfoTitle, InfoDescription, InfoImage } from './styles';
import { homeObjOne } from './Data'; // Importing homeObjOne from Data.js

const Info = () => {
  return (
    <InfoContainer>
      <InfoImage src={homeObjOne.img} alt="Web API" />
      <InfoSection>
        <InfoTitle>{homeObjOne.title}</InfoTitle>
        <InfoDescription>{homeObjOne.description}</InfoDescription>        
      </InfoSection>
    </InfoContainer>
  );
};

export default Info;
