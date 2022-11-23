import styled from 'styled-components';

import { Container } from '../components/container/container';
import { Landing } from '../components/page-elements/home/landing';
import { Welcome } from '../components/page-elements/home/welcome';
import { Features } from '../components/page-elements/home/feature';
import { WhyTigris } from 'src/components/page-elements/home/whytigris';
import { ContentContainer } from 'src/components/container/content-container';
import { Journey } from 'src/components/page-elements/home/journey';

export const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <Landing />
        <ContentContainer>
          <Welcome />
          <Features />
          <WhyTigris />
          <Journey />
        </ContentContainer>
      </Container>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  gap: 50px;
`;
