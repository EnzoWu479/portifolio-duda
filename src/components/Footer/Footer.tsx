import { Container, FooterWrapper, HyperLink, IconWrapper } from './_footer';
import { BiCopyright } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsDot, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
const Footer = () => {
  const whatsappText =
    'Olá Duda, tudo bem? Gostaria de saber mais sobre o seu trabalho!';
  return (
    <Container>
      <FooterWrapper>
        <BiCopyright />
        UI/UX Design | Maria Eduarda <BsDot /> 2023
      </FooterWrapper>
      <BsDot />
      <IconWrapper>
        <HyperLink
          href={`https://api.whatsapp.com/send?phone=+5511980364925&text=${whatsappText}`}
          target="_blank"
          title="Whatsapp"
        >
          <BsWhatsapp />
        </HyperLink>
        <HyperLink>
          <AiOutlineMail />
        </HyperLink>
        <HyperLink
          href="https://www.linkedin.com/in/ maria-eduarda-souza-cunha-66483a254/"
          target="_blank"
          title="LinkedIn"
        >
          <BsLinkedin />
        </HyperLink>
      </IconWrapper>
    </Container>
  );
};

export default Footer;
