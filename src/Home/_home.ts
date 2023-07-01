import { styled } from 'styled-components';

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
  perspective: 10px;
`;
