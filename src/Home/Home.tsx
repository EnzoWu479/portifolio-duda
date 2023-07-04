import Hero from '`@/components/Hero/Hero`';
import { Container } from './_home';
import Projects from '`@/components/Projects/Projects`';
import Footer from '`@/components/Footer/Footer`';
import Resume from '`@/components/Resume/Resume`';

const Home = () => {
  return (
    <Container>
      <Hero />
      <Resume />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
