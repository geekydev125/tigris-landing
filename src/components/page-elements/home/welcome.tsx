import { HeaderText } from '../../../components/text/header-text';
import styled, { css } from 'styled-components';
import Illustration from '../../../assets/images/Illustration.svg';
import { NormalText } from 'src/components/text/normal-text';

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeContent1>
        <HeaderText>Welcome To The Future Of Open Decentralized Leveraged Trading.</HeaderText>
        <NormalText>
          The innovative oracle architecture uses signed price data to provide real-time asset prices for trading,
          making it the fastest and most reliable on-chain leveraged trading platform.
        </NormalText>
      </WelcomeContent1>
      <WelcomeContent2>
        <WelcomeImage src={Illustration} alt="illustration" />
      </WelcomeContent2>
    </WelcomeContainer>
  );
};

const SharedStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  @media screen and (max-width: 1096px) {
    flex-direction: column;
    align-items: unset;
  }
`;

const WelcomeContent1 = styled.div`
  ${SharedStyle}
  max-width: 470px;
  @media screen and (max-width: 1096px) {
  }
`;

const WelcomeContent2 = styled.div`
  ${SharedStyle}
  align-items: flex-end;
  @media screen and (max-width: 1096px) {
  }
`;

const WelcomeImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
`;
