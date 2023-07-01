import {
  ButtonContact,
  ButtonContainer,
  ButtonPortifolio,
  Container,
  Description,
  HeroImage,
  Infos,
  Subtitle,
  Title,
} from './_hero';

const Hero = () => {
  return (
    <Container>
      <HeroImage />
      <Infos>
        <Title>
          Maria <br /> Eduarda
        </Title>
        <Subtitle>Ui/UX Design</Subtitle>
        <Description>
          Você está procurando uma designer que tem <br /> paixão pelo seu
          trabalho e pelo que faz?
        </Description>
        <ButtonContainer>
          <ButtonPortifolio type="button">Portifólio</ButtonPortifolio>
          <ButtonContact type="button">Contato</ButtonContact>
        </ButtonContainer>
      </Infos>
    </Container>
  );
};

export default Hero;
