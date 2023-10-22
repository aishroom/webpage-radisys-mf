import React from 'react';
import { FooterContainer, FooterContent, SponsorsList, Sponsor, SponsorImage } from './styles';
import { sponsors } from './Data'; // Make sure you import the sponsors data from the Data.js file

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>Tu contenido de pie de página aquí</FooterContent>
      <SponsorsList>
        {sponsors.map((sponsor, index) => (
          <Sponsor key={index}>
            <SponsorImage src={sponsor.image} alt={sponsor.name} />
            {sponsor.name}
          </Sponsor>
        ))}
      </SponsorsList>
    </FooterContainer>
  );
};

export default Footer;
