import React from 'react';
import styled from 'styled-components';
import { NormalText } from '../text/normal-text';
import { TitleText } from '../text/title-text';

interface FeatureCardType {
  key: number;
  icon: string;
  title: string;
  content: string;
}

export const FeatureCard = (props: FeatureCardType) => {
  const { icon, title, content } = props;
  return (
    <CardContainer>
      <CardIcon>
        <IconBox>
          <img src={icon} alt="card-icon" />
        </IconBox>
      </CardIcon>
      <CardContent>
        <TitleText>{title}</TitleText>
        <NormalText>{content}</NormalText>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const CardIcon = styled.div``;

const IconBox = styled.div`
  width: 80px;
  height: 80px;
  @media screen and (max-width: 540px) {
    width: 60px;
    height: 60px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(47, 50, 65, 0.5);
  border-radius: 12px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
