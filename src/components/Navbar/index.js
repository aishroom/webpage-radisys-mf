// Navbar/index.js
import React, { useState } from 'react';
import { NavbarContainer, Logo, NavLink, NavMenu, MobileIcon } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { homeObj } from './Data'; // Importa el archivo Data.js

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleNavLinkClick = () => {
    if (click) {
      setClick(false);
    }
  };

  return (
    <NavbarContainer>
      <Logo src={homeObj.logoUrl} alt="logo" /> {/* Utiliza la URL del logo desde el objeto importado */}
      <MobileIcon onClick={handleClick}>
        <FaBars />
      </MobileIcon>
      <NavMenu click={click}>
        {homeObj.menuItems.map((item, index) => ( // Utiliza los elementos del menú desde el objeto importado
          <NavLink key={index} to={item.to} onClick={handleNavLinkClick}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
