import styled from 'styled-components';

import { ExtraHeaderText } from 'src/components/text/extra-header-text';
import { NormalText } from 'src/components/text/normal-text';
import { BlueButton } from 'src/components/button/blue-button';
import { NextIcon } from 'src/components/icon/next-icon';
import { ContentContainer } from 'src/components/container/content-container';
import { LandingBackground } from './landing-bg';

export const Landing = () => {
  return (
    <LandContainer>
      <LandingBackground />
      <ContentContainer>
        <LandingContent>
          <ExtraHeaderText>Fastest & Secure platform to invest in crypto</ExtraHeaderText>
          <NormalText>
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions
          </NormalText>
          <BlueButton>
            Start trading
            <NextIcon />
          </BlueButton>
        </LandingContent>
      </ContentContainer>
    </LandContainer>
  );
};

const LandContainer = styled.div`
  position: relative;
  overflow: hidden;

  height: 680px;

  z-index: 0;
`;

const LandingContent = styled.div`
  padding-top: 120px;

  max-width: 600px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-items: stretch;

  gap: 40px;

  overflow: hidden;

  z-index: 2;

  @media screen and (max-width: 768px) {
    gap: 34px;
    max-width: 500px;
    padding-top: 90px;
  }

  @media screen and (max-width: 425px) {
    gap: 20px;
    max-width: 280px;
    padding-top: 50px;
  }
`;
