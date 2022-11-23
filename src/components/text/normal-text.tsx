import styled from 'styled-components';

interface NormalTextProps {
  children: React.ReactNode;
}

export const NormalText = ({ children }: NormalTextProps) => {
  return <NormalTextWrapper>{children}</NormalTextWrapper>;
};

const NormalTextWrapper = styled.p`
  padding: 0;
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 28px;

  color: ${(props) => props.theme.whiteAlt};

  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`;
