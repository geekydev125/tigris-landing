import styled from 'styled-components';

import { Badge } from './badge';
import { CloseIcon } from '../../icon/close-icon';
import { DocumentIcon } from '../../icon/document-icon';
import { GradientButton } from '../../button/gradient-button';
import { HeaderLink } from '../../link/header-link';

interface MobileNavProps {
  opened: boolean;
  onClose: () => void;
}

export const MobileNav = ({ opened, onClose }: MobileNavProps) => {
  return (
    <MobileNavContainer opened={opened}>
      <MobileNavBox>
        <MobileNavHeader>
          <CloseIcon onClick={onClose} />
          <GradientButton>Launch App</GradientButton>
        </MobileNavHeader>
        <MobileNavContent>
          <HeaderLink path="">
            <DocumentIcon />
            Documentation
          </HeaderLink>
          <HeaderLink path="">
            Discord
            <Badge />
          </HeaderLink>
        </MobileNavContent>
      </MobileNavBox>
    </MobileNavContainer>
  );
};

interface MobileNavContainerProps {
  opened: boolean;
}

const MobileNavContainer = styled.div<MobileNavContainerProps>`
  display: ${(props) => (props.opened ? 'block' : 'none')};
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

  backdrop-filter: brightness(40%);
`;

const MobileNavBox = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 325px;
  height: 160px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  gap: 16px;

  background-color: ${(props) => props.theme.black};
`;

const MobileNavHeader = styled.div`
  padding: 12px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.greyAlt};
`;

const MobileNavContent = styled.div`
  padding: 0px 20px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  gap: 20px;
`;
