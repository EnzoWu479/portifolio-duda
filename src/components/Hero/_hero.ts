import media from '`@/styles/media`';
import Image from 'next/image';
import { styled } from 'styled-components';
import { SectionScroll } from '../SectionScroll/SectionScroll';

export const Container = styled(SectionScroll)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.mobile} {
    align-items: center;
  }
`;
export const HeroImage = styled.div`
  position: absolute;
  /* inset: 60px 0; */
  inset: 0;

  background-image: linear-gradient(
      to top,
      ${({ theme }) => theme.colors['background']} 0% 10%,
      transparent 50% 60%,
      ${({ theme }) => theme.colors['purple-3']} 95% 100%
    ),
    url('/assets/imgs/hero.webp');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100%;

  transform: translateZ(-5px) scale(1.5);
  ${media.mobile} {
    background-position: center;
    background-size: cover;
    filter: brightness(0.3) blur(3px);
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
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors['purple-2']} 0%,
    ${({ theme }) => theme.colors['purple-1']} 100%
  );
  color: ${({ theme }) => theme.colors.white};

  height: 40px;
  border: none;
  border-radius: 0.625rem;

  cursor: pointer;
`;
export const ButtonContact = styled(ButtonPortifolio)`
  background-image: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-1']};
    color: ${({ theme }) => theme.colors.white};
  }
`;
