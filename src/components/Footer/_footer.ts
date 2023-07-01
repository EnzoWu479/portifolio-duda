import media from '`@/styles/media`';
import { styled } from 'styled-components';

export const Container = styled.footer`
  scroll-snap-align: end;

  padding: 2rem 10%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  /* height: calc(100dvh - 80px); */
  color: ${({ theme }) => theme.colors.white}80;
  ${media.laptop} {
    padding: 1rem 5%;
  }
`;
export const FooterWrapper = styled.div`
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const HyperLink = styled.a`
  font-size: 1.25rem;
  cursor: pointer;
`;
