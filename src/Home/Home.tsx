import Hero from '`@/components/Hero/Hero`';
import { Container } from './_home';
import Projects from '`@/components/Projects/Projects`';
import Footer from '`@/components/Footer/Footer`';

const Home = () => {
  return (
    <Container>
      <Hero />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
