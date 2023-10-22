// Navbar/NavbarElements.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: 80px;
  color: white;
  max-height: 200px;
  min-height: 7vw;
`;

export const Logo = styled.img`
width: 70px;
  height: auto;
  /* Additional styles for the logo */
  padding: 10px 5vw;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0 15px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  &:hover {
    color: #e67e22;
    /* Additional styles for hover effect */
  }
`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  background: black;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: ${({ click }) => (click ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    width: 100%;
    height: 90vh;
   
    /* Additional styles for mobile view */
  }
`;

export const MobileIcon = styled.div`
  
  display: none;
  padding: 10px 5vw;
  @media screen and (max-width: 768px) {
    display: block;
    /* Additional styles for the MobileIcon */
  }
`;
