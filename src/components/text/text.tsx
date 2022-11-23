import styled from 'styled-components';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  textColor?: string;
  onClick?: () => void;
}

// ====================
// Normal text component
// ====================
export const Text = ({ children, className, size, textColor, onClick }: TextProps) => {
  return (
    <TextWrapper className={className} onClick={onClick} style={{ fontSize: size, color: textColor }}>
      {children}
    </TextWrapper>
  );
};

const TextWrapper = styled.p`
  margin: 0;
  padding: 0;
`;
