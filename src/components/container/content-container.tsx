import styled from 'styled-components';

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentContainer = ({ children, className }: ContentContainerProps) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  padding: 0px 100px 50px 100px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-items: stretch;

  gap: 7rem;

  @media screen and (max-width: 768px) {
    padding: 0px 80px 50px 80px;
  }
  @media screen and (max-width: 580px) {
    padding: 0px 20px 50px 20px;
  }
`;
