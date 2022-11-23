import styled from 'styled-components';

interface GradientButtonProps {
  children: React.ReactNode;
}

export const GradientButton = ({ children }: GradientButtonProps) => {
  return (
    <LaunchAppButton>
      <span className="text">{children}</span>
    </LaunchAppButton>
  );
};

const LaunchAppButton = styled.button`
  border: none;
  outline: none;

  border-radius: 5px;

  cursor: pointer;

  padding: 1px;

  color: ${(props) => props.theme.white};

  background: -webkit-linear-gradient(-45deg, #4136f1, #8743ff);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text {
    padding: 12px 30px;

    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;

    border: none;
    border-radius: 5px;

    background-color: ${(props) => props.theme.black};

    @media (max-width: 580px) {
      padding: 8px 20px;
    }
  }
`;
