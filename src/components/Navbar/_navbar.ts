import media from '`@/styles/media`';
import Link from 'next/link';
import { css, styled } from 'styled-components';

interface NavContainerProps {
  isOpen: boolean;
}
export const NavWrapper = styled.div`
  /* overflow: hidden; */
`;
export const NavContainer = styled.nav<NavContainerProps>`
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  ${media.tablet} {
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    z-index: 999;

    background-color: ${({ theme }) => theme.colors.background};

    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  ${media.tablet} {
    flex-direction: column;
  }
`;
export const NavItem = styled.li``;
export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white}80;

  font-size: 0.875rem;

  transition: all ease 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors['purple-2']};
  }
`;
export const ContactMe = styled.button`
  border: none;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['purple-2']}80;

  height: 40px;
  border-radius: 0.25rem;
  padding: 0 1rem;

  cursor: pointer;
`;
export const HamburguerButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  border: none;
  cursor: pointer;
  font-size: 2rem;

  align-items: center;
  justify-content: center;

  display: none;
  ${media.tablet} {
    display: flex;
  }
`;
