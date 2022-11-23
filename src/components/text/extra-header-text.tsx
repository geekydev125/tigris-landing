import styled from 'styled-components';

interface ExtraHeaderTextProps {
  children: React.ReactNode;
}

export const ExtraHeaderText = ({ children }: ExtraHeaderTextProps) => {
  return <ExtraHeaderTextWrapper>{children}</ExtraHeaderTextWrapper>;
};

const ExtraHeaderTextWrapper = styled.p`
  padding: 0;
  margin: 0;

  font-size: 54px;
  font-weight: 500;
  line-height: 68px;

  color: ${(props) => props.theme.white};

  @media screen and (max-width: 768px) {
    font-size: 40px;
    font-weight: 700;
    line-height: 55px;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
    font-weight: 700;
    line-height: 35px;
  }
`;
