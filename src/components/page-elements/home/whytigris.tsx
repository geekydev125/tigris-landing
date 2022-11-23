import React from 'react';
import { HeaderText } from 'src/components/text/header-text';
import styled from 'styled-components';
import OmegaIcon from '../../../assets/images/omega.svg';
import MoneyReceiveIcon from '../../../assets/images/money-receive.svg';
import BitcoinRefreshIcon from '../../../assets/images/bitcoin-refresh.svg';
import BitcoinConvert from '../../../assets/images/bitcoin-covert.svg';
import DollanSchoolIcon from '../../../assets/images/dollar-school.svg';
import LockIcon from '../../../assets/images/lock.svg';
import SmartPhoneIcon from '../../../assets/images/smart-phone.svg';
import KeyIcon from '../../../assets/images/key.svg';
import { TigrisCard } from 'src/components/card/tigris-card';

const TigrisCardsData = [
  {
    id: 1,
    icon: OmegaIcon,
    title: 'Nft based leverage positions',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  },
  {
    id: 2,
    icon: MoneyReceiveIcon,
    title: 'Low trading Fees on platform',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  },
  {
    id: 3,
    icon: BitcoinRefreshIcon,
    title: 'Instant Trade Settlement',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  },
  {
    id: 4,
    icon: BitcoinConvert,
    title: 'Flexible Trade management',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  },
  {
    id: 5,
    icon: DollanSchoolIcon,
    title: 'Custom real-time pricing',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  },
  {
    id: 6,
    icon: LockIcon,
    title: 'Security focused first of all',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  },
  {
    id: 7,
    icon: SmartPhoneIcon,
    title: 'User-friendly UX/UI interface',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  },
  {
    id: 8,
    icon: KeyIcon,
    title: 'No sign up required',
    content: 'Leverage on any tokens with a protocol trusted with billions for its performance and reliability.'
  }
];

export const WhyTigris = () => {
  return (
    <>
      <TigrisWrapper>
        <HeaderText>Why use Tigris ?</HeaderText>
        <TigrisText>
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
        </TigrisText>
        <TigrisCardContainer>
          {TigrisCardsData.map((card) => (
            <TigrisCard key={card.id} icon={card.icon} title={card.title} content={card.content} />
          ))}
        </TigrisCardContainer>
      </TigrisWrapper>
    </>
  );
};

const TigrisWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TigrisText = styled.div`
  padding: 0;
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
  max-width: 370px;

  color: ${(props) => props.theme.whiteAlt};
  text-align: center;
`;

const TigrisCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width: 1300px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 666px) {
    grid-template-columns: auto;
  }
  gap: 2rem;
`;
