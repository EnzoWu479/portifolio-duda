import Image from 'next/image';
import { Container, Logo, RightSide } from './_header';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <Container>
      <Image src="/assets/icons/logo.svg" width={80} height={60} alt="Logo" />
      <Navbar />
    </Container>
  );
};

export default Header;
