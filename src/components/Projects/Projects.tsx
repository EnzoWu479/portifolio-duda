import Image from 'next/image';
import {
  Container,
  ProjectButton,
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectInfo,
  ProjectName,
  ProjectsContainer,
  Title,
} from './_projects';

const Projects = () => {
  return (
    <Container>
      <Title>
        Veja alguns dos <span>meus projetos</span>
      </Title>
      <ProjectsContainer>
        <ProjectCard>
          <ProjectImage>
            <Image src="/assets/imgs/project1.svg" fill alt="project1" />
          </ProjectImage>

          <ProjectInfo>
            <ProjectName>PetShare+</ProjectName>
            <ProjectDescription>
              PetShare+ é uma plataforma inovadora para adoção de pets, tornando
              a busca e adoção mais fácil e conveniente.
            </ProjectDescription>
            <ProjectButton type="button">Veja mais</ProjectButton>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard>
          <ProjectInfo>
            <ProjectName>PetShare+</ProjectName>
            <ProjectDescription>
              PetShare+ é uma plataforma inovadora para adoção de pets, tornando
              a busca e adoção mais fácil e conveniente.
            </ProjectDescription>
            <ProjectButton type="button">Veja mais</ProjectButton>
          </ProjectInfo>
          <ProjectImage>
            <Image src="/assets/imgs/project1.svg" fill alt="project1" />
          </ProjectImage>
        </ProjectCard>
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
