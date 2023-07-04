import Image from 'next/image';
import { Container, Description, ImageWrapper } from './_resume';

const Resume = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="/assets/imgs/resume.svg" fill alt="Resume" />
      </ImageWrapper>
      <Description>
        Sempre fui uma menina que gostava de aprender as coisas conhecendo suas
        funções. <br /> Tive muitos erros para chegar as minhas habilidades
        atuais. Designer não é só uma profissão, mas se tornou a minha paixão.{' '}
        <br />
        <br />
        “Falhe logo para que possa ter sucesso mais cedo.” - Tom Kelley
      </Description>
    </Container>
  );
};

export default Resume;
