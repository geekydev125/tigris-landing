import styled from 'styled-components';

import { MdNavigateNext } from 'react-icons/md';

export const NextIcon = () => {
  return (
    <NextIconWrapper>
      <NavigateNextIcon />
    </NextIconWrapper>
  );
};

const NextIconWrapper = styled.div`
  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.white};

  @media screen and (max-width: 768px) {
    width: 27px;
    height: 27px;
  }

  @media screen and (max-width: 425px) {
    width: 20px;
    height: 20px;
  }
`;

const NavigateNextIcon = styled(MdNavigateNext)`
  color: ${(props) => props.theme.sky};
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
