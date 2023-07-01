import { styled } from 'styled-components';
import { SectionScroll } from '../SectionScroll/SectionScroll';
import Image from 'next/image';
import media from '`@/styles/media`';

export const Container = styled(SectionScroll)`
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 3rem;
  padding-bottom: 1.5rem;

  min-height: calc(100dvh - 80px);
  height: fit-content;

  ${media.tablet} {
    padding-bottom: 3rem;
  }
`;
export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;

  > span {
    color: ${({ theme }) => theme.colors['purple-2']};
  }
`;
export const ProjectsContainer = styled.div`
  margin-top: 1.5rem;
`;
export const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
export const ProjectImage = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  transform: scale(1.5);

  pointer-events: none;
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 350px;

  ${media.tablet} {
    order: 2;
  }
`;
export const ProjectName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;
export const ProjectDescription = styled.p`
  color: #090e16b2;
`;
export const ProjectButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 0 1.5rem;
  margin-top: 0.5rem;

  border-radius: 0.25rem;

  border: none;

  background-color: ${({ theme }) => theme.colors['purple-2']};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;
