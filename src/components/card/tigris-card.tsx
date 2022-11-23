import React from 'react';
import styled from 'styled-components';
import { NormalText } from '../text/normal-text';
import { TitleText } from '../text/title-text';

interface TigrisCardType {
  icon: string;
  title: string;
  content: string;
}

export const TigrisCard = (props: TigrisCardType) => {
  const { icon, title, content } = props;
  return (
    <>
      <CardBox>
        <img src={icon} alt="card-icon" />
        <TextContainer>
          <TitleText>{title}</TitleText>
          <NormalText>{content}</NormalText>
        </TextContainer>
      </CardBox>
    </>
  );
};

const CardBox = styled.div`
  width: 290px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #18191d;
  backdrop-filter: blur(2px);
  border-radius: 12px;
  gap: 1.5rem;
`;

const TextContainer = styled.div`
  max-width: 220px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
