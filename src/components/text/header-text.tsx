import styled from 'styled-components';

interface HeaderTextProps {
  children: React.ReactNode;
}

export const HeaderText = ({ children }: HeaderTextProps) => {
  return <HeaderTextWrapper>{children}</HeaderTextWrapper>;
};

const HeaderTextWrapper = styled.p`
  padding: 0;
  margin: 0;

  font-size: 40px;
  font-weight: 700;
  line-height: 4rem;

  @media screen and (max-width: 1096px) {
    font-size: 30px;
  }

  @media screen and (max-width: 540px) {
    line-height: 2.5rem;
    font-size: 20px;
  }

  text-transform: capitalize;

  color: ${(props) => props.theme.white};
`;
