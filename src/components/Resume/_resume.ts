import { styled } from 'styled-components';
import { SectionScroll } from '../SectionScroll/SectionScroll';

export const Container = styled(SectionScroll)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: calc(74dvh - 80px);
  margin-top: 26dvh;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  transform: translateZ(-5px) scale(1.5) translateX(-50%);
`;
export const Description = styled.div`
  color: ${({ theme }) => theme.colors.white}80;

  transform: translateZ(-4px) scale(1.4);
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  -webkit-transform: translateZ(-4px) scale(1.4);
`;
