import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../components/container/container';
import { GradientButton } from '../components/button/gradient-button';
import { MobileNav } from '../components/page-elements/header/mobile-nav';
import { ReduceIcon } from '../components/icon/reduce-icon';
import { HeaderLink } from '../components/link/header-link';
import { Badge } from '../components/page-elements/header/badge';

import { LOGO } from '../config/images';
import { PUBLIC_ROUTES } from '../config/routes';

export const Header = () => {
  const [isOpened, setIsOpend] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <ContentWrapper>
          <LogoGroup>
            <Logo to={PUBLIC_ROUTES.home} className="large font-chango">
              <img src={LOGO} alt="logo" height="32px" />
            </Logo>
            <ReduceIcon onClick={() => setIsOpend(true)} />
          </LogoGroup>
          <LinkBox>
            <LinkGroup>
              <HeaderLink path={''}>Documentation</HeaderLink>
              <HeaderLink path={''}>
                Discord
                <Badge className="badge" />
              </HeaderLink>
            </LinkGroup>
            <GradientButton>Launch App</GradientButton>
          </LinkBox>
          <MobileNav opened={isOpened} onClose={() => setIsOpend(false)} />
        </ContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 64px;

  border-bottom: 1px solid ${(props) => props.theme.darkGrey};

  background-color: ${(props) => props.theme.black};

  z-index: 30;
`;

const ContentWrapper = styled.div`
  padding: 16px 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 10px;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  color: ${(props) => props.theme.white};

  @media (max-width: 580px) {
    img {
      width: 100px;
    }
  }
`;

const LogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;

  gap: 20px;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  gap: 20px;

  @media (max-width: 580px) {
    display: none;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
`;
