import type { NextPage } from 'next';
import styled from 'styled-components';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustration';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Contents>
        <Heading>We read a book for you to improve your lifestyle</Heading>
        <Description>
          As you know, reading is one of the habits that many leadership have. We will read books for you in summarized manner, everyday, so
          you can absorb many information as much as possible!
        </Description>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </PageContainer>
  );
};

const PageContainer = styled(Container)`
  top: var(--height-navbar);
  display: flex;
  padding: 2px;
  display: flex;
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }
`;

export default Home;
