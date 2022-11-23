import styled from 'styled-components';

interface BlueButtonProps {
  children: React.ReactNode;
}

export const BlueButton = ({ children }: BlueButtonProps) => {
  return (
    <ButtonContainer>
      <Button>{children}</Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px 24px;

  gap: 24px;

  font-size: 18px;
  font-weight: 500;
  line-height: 27px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.sky};

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    padding: 16px 16px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 21px;
    padding: 16px 12px;
  }
`;
