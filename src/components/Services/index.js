// Services/index.js
import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './styles';
import { serviceOne, serviceThree, serviceTwo } from './Data';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={serviceOne.img} />
          <ServicesH2>{serviceOne.title}</ServicesH2>
          <ServicesP>{serviceOne.description}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={serviceTwo.img} />
          <ServicesH2>{serviceTwo.title}</ServicesH2>
          <ServicesP>{serviceTwo.description}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={serviceThree.img} />
          <ServicesH2>{serviceThree.title}</ServicesH2>
          <ServicesP>{serviceThree.description}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
