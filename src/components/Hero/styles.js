import styled from 'styled-components';

export const HeroContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
max-height: 400px;
height: 400px;
background: linear-gradient(26deg, #265c7d, #51b8fa,#33cccc);
background: white;


`;

export const HeroBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`  
color: black;
    font-size: 4.5rem;
    text-align: right;
    max-width: 50%;
`;

export const HeroSubtitle = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 1.5rem;
  text-align: center;
`;

// Agrega más componentes estilizados según sea necesario
