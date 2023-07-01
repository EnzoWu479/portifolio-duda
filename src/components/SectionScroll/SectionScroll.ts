import media from '`@/styles/media`';
import { styled } from 'styled-components';

export const SectionScroll = styled.section`
  /* width: 100dvw; */
  scroll-snap-align: start;

  padding: 0 10%;

  transform-style: preserve-3d;
  
  height: calc(100dvh - 80px);

  ${media.laptop} {
    padding: 0 5%;
  }
`;
export const SectionContentWrapper = styled.div`
  overflow: hidden;
`;
