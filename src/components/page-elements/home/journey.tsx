import React from 'react';
import { HeaderText } from 'src/components/text/header-text';
import { NormalText } from 'src/components/text/normal-text';
import { SiDiscord, SiTwitter } from 'react-icons/si';
import styled from 'styled-components';

export const Journey = () => {
  return (
    <ContainerWrapper>
      <JourneyWrapper>
        <HeaderText>Join us our journey</HeaderText>
        <NormalText>
          Help us build the future of leverage trading by joining our Discord and following our Twitter.
        </NormalText>
        <SocialBox>
          <SocialIcon>
            <SiDiscord style={{ width: '65%', height: '65%' }} />
          </SocialIcon>
          <SocialIcon>
            <SiTwitter style={{ width: '65%', height: '65%' }} />
          </SocialIcon>
        </SocialBox>
      </JourneyWrapper>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  padding: 0 5rem;
  @media screen and (max-width: 768px) {
    padding: 0 3.5rem;
  }
  @media screen and (max-width: 640px) {
    padding: 0 2rem;
  }
`;

const JourneyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

const SocialBox = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;
  cursor: pointer;
  margin-bottom: 200px;
  @media screen and (max-width: 640px) {
    margin-top: 20px;
  }
`;

const SocialIcon = styled.div`
  width: 75px;
  height: 75px;
  background: rgba(47, 50, 65, 0.56);
  border-radius: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 65px;
    height: 65px;
  }

  @media screen and (max-width: 640px) {
    width: 42px;
    height: 42px;
  }
`;
