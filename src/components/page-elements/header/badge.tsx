import styled from 'styled-components';

interface BadgeProps {
  className?: string;
}

export const Badge = ({ className }: BadgeProps) => {
  return (
    <BadgeWrapper className={className}>
      <span className="content" />
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.span`
  width: 14px;
  height: 14px;

  border: none;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.blueAlt};

  .content {
    width: 4px;
    height: 4px;

    border: none;
    border-radius: 50%;

    background-color: ${(props) => props.theme.blue};
  }
`;
