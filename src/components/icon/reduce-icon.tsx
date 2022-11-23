import styled from 'styled-components';

interface ReduceIconProps {
  onClick: () => void;
}

export const ReduceIcon = ({ onClick }: ReduceIconProps) => {
  return (
    <Icon onClick={onClick}>
      <span />
      <span />
      <span />
    </Icon>
  );
};

const Icon = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5px;

  span {
    width: 18px;
    height: 2px;

    background-color: ${(props) => props.theme.white};
  }

  @media (max-width: 580px) {
    display: flex;
  }
`;
