import React from 'react';
import { FeatureCard } from 'src/components/card/feature-card';
import styled from 'styled-components';
import ShieldIcon from '../../../assets/images/shield.svg';
import ShareIcon from '../../../assets/images/share.svg';
import MoneySendIcon from '../../../assets/images/money-send.svg';

const cardArr = [
  {
    id: 1,
    icon: ShieldIcon,
    title: 'Feature',
    content:
      'Tigris pioneers the use of NFT-based open positions resulting in a smarter and more reliable trading experience that is accessible to all.'
  },
  {
    id: 2,
    icon: ShareIcon,
    title: 'Feature',
    content:
      'Tigris offers instant trade settlement on spot market prices, low fees, and the ability to interact with your open positions as NFTs.'
  },
  {
    id: 3,
    icon: MoneySendIcon,
    title: 'Feature',
    content:
      'Guaranteed prices for limit orders, zero slippage. Advanced trading features such as margin management and partial closing. No KYC. '
  }
];

export const Features = () => {
  return (
    <FeatureWrapper>
      {cardArr.map((item) => (
        <FeatureCard key={item.id} icon={item.icon} title={item.title} content={item.content} />
      ))}
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  @media screen and (max-width: 1092px) {
    flex-direction: column;
  }
`;

const ContainerWrapper = styled.div`
  padding: 0 100px;
  @media screen and (max-width: 768px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 640px) {
    padding: 0 20px;
  }
`;
