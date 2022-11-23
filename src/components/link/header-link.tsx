import styled from 'styled-components';

import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  children: React.ReactNode;
  path: string;
}

export const HeaderLink = ({ children, path }: HeaderLinkProps) => {
  return <HeaderLinkWrapper to={path}>{children}</HeaderLinkWrapper>;
};

const HeaderLinkWrapper = styled(Link)`
  text-decoration: none;

  font-size: 16px;
  font-weight: 500;
  line-height: 21px;

  color: ${(props) => props.theme.white};

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;

  gap: 10px;

  .badge {
    position: absolute;
    top: -2px;
    right: -10px;
  }

  @media (max-width: 580px) {
    font-size: 12px;
  }
`;
