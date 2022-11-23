import styled from 'styled-components';

interface TitleTextProps {
  children: React.ReactNode;
}

export const TitleText = ({ children }: TitleTextProps) => {
  return <TitleTextWrapper>{children}</TitleTextWrapper>;
};

const TitleTextWrapper = styled.p`
  padding: 0;
  margin: 0;

  font-size: 22px;
  font-weight: 700;
  line-height: 120%;

  color: ${(props) => props.theme.white};

  @media screen and (max-width: 425px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
  }
`;
