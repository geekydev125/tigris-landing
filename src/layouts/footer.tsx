import styled from 'styled-components';
import { Container } from '../components/container/container';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { RiGasStationFill } from 'react-icons/ri';
import { Text } from '../components/text/text';
import { LinkText } from '../components/link/linktext';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContentWrapper>
          <Content>
            <TextCoin>
              <BsFillCheckCircleFill color={'#58BD7D'} />
              <Text>BTC/USDT</Text>
            </TextCoin>
            <ResponsiveText>
              <span>Server time:</span>
              <span> 10-02 10:36:42 UTC</span>
            </ResponsiveText>
            <TextContent>
              <RiGasStationFill color={'#B1B5C3'} size="16" />
              <Text>Gas Fee: 2.22 %</Text>
            </TextContent>
          </Content>
          <Line />
          <Content>
            <SocialLinks>
              <LinkText className="discord-link" link="https://discord.com">
                Discord
              </LinkText>
              <LinkText className="twitter-link" link="https://twitter.com">
                Twitter
              </LinkText>
              <LinkText className="telegram-link" link="https://t.me">
                Telegram
              </LinkText>
            </SocialLinks>
            <ResponsiveText className="copy-right">&copy; 2022. All rights reserved</ResponsiveText>
          </Content>
        </ContentWrapper>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.blackAlt};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 50px;
  padding: 0 15px;
`;

const TextCoin = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const TextContent = styled.div`
  display: flex;
  color: ${(props) => props.theme.lightGrey};
  align-items: center;
  gap: 5px;
`;

const ResponsiveText = styled.div`
  display: flex;
  color: ${(props) => props.theme.lightGrey};
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const Line = styled.div`
  display: none;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.darkGrey};
  @media screen and (max-width: 840px) {
    display: block;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;
