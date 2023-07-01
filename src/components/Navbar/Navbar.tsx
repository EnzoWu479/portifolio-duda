import { useState } from 'react';
import {
  ContactMe,
  HamburguerButton,
  NavContainer,
  NavItem,
  NavLink,
  NavList,
  NavWrapper,
} from './_navbar';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <NavWrapper> 
      <NavContainer isOpen={isNavOpen}>
        <NavList>
          <NavItem>
            <NavLink href="">Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Sobre mim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Portifólio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Carreira</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Curriculo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Contato</NavLink>
          </NavItem>
          <NavItem>
            <ContactMe>
              Vamos conversar
            </ContactMe>
          </NavItem>
        </NavList>
      </NavContainer>
      <HamburguerButton
        type="button"
        onClick={() => setIsNavOpen(prev => !prev)}
      >
        <GiHamburgerMenu />
      </HamburguerButton>
    </NavWrapper>
  );
};

export default Navbar;
