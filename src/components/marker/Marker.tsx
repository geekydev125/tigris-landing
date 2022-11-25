import styled from 'styled-components';

interface MarkerProps {
  name: string;
  symbol?: string | null;
  icon: string;
  className: string;
}

export const Marker = ({ name, symbol = null, icon, className }: MarkerProps) => {
  return (
    <Wrapper className={className}>
      <MarkerWrapper>
        <Icon src={icon} alt="marker" />
        <Name>{name}</Name>
        {symbol !== null && <Symbol>{symbol}</Symbol>}
        <Circle />
      </MarkerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -62px;
    left: 50%;

    width: 2px;
    height: 60px;

    background-color: ${(props) => props.theme.white};

    @media (max-width: 580px) {
      width: 1px;
      height: 35px;

      bottom: -37px;
    }
  }
`;

const Circle = styled.div`
  width: 9px;
  height: 9px;

  position: absolute;
  bottom: -76px;
  left: calc(50% - 4px);

  border: 1px solid ${(props) => props.theme.white};
  border-radius: 50%;

  @media (max-width: 580px) {
    bottom: -50px;
    left: calc(50% - 5px);
  }
`;

const MarkerWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 20px;

  padding: 24px 24px 24px 48px;

  border: none;
  border-radius: 5px;

  background-color: linear-gradient(266.43deg, rgba(24, 25, 29, 0.73) 8.2%, rgba(24, 25, 29, 0) 136.5%);
  backdrop-filter: blur(100px);

  @media (max-width: 580px) {
    padding: 14px 18px 14px 24px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding: 0;

  color: ${(props) => props.theme.white};

  font-size: 22px;
  font-weight: 700;

  @media (max-width: 580px) {
    font-size: 16px;
  }
`;

const Symbol = styled.p`
  margin: 0;
  padding: 0;

  color: ${(props) => props.theme.grey};

  font-size: 22px;
  font-weight: 500;

  @media (max-width: 580px) {
    font-size: 16px;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 20px;
  left: -20px;

  width: 40px;
  height: 40px;

  @media (max-width: 580px) {
    width: 25px;
    height: 25px;

    top: 12px;
    left: -12px;
  }
`;
