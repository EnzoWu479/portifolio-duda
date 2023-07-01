import media from '`@/styles/media`';
import Image from 'next/image';
import { styled } from 'styled-components';

export const Container = styled.header`
  height: 80px;
  background-color: ${({ theme }) => theme.colors['purple-3']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;

  position: sticky;
  top: 0;
  z-index: 999;

  ${media.laptop} {
    padding: 0 5%;
  }
`;
export const Logo = styled(Image)``;
export const RightSide = styled.div``;