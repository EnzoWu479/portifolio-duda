import media from '`@/styles/media`';
import Image from 'next/image';
import { styled } from 'styled-components';
import { SectionScroll } from '../SectionScroll/SectionScroll';

export const Container = styled(SectionScroll)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: -1;
`;
export const HeroImage = styled.div`
  position: absolute;
  inset: 0;

  background-image: url('/assets/imgs/hero.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;

  transform: translateZ(-10px) scale(2);
  ${media.mobile} {
    background-position: center;
    background-size: cover;
  }
`;
export const Infos = styled.div`
  color: ${({ theme }) => theme.colors.white}80;
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  /* transform: translateZ(1px) scale(0.9) translateX(10%); */
`;
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  font-weight: 700;
`;
export const Subtitle = styled.h3`
  font-size: 1.2rem;
`;
export const Description = styled.p`
  font-size: 1rem;
  font-style: italic;
`;
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.2rem;
`;
export const ButtonPortifolio = styled.button`
  background-color: ${({ theme }) => theme.colors['purple-1']};
  color: ${({ theme }) => theme.colors.white};

  height: 40px;
  border: none;
  border-radius: 0.625rem;

  cursor: pointer;
`;
export const ButtonContact = styled(ButtonPortifolio)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors['purple-1']};
  color: ${({ theme }) => theme.colors['purple-2']};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-1']};
    color: ${({ theme }) => theme.colors.white};
  }
`;
