import styled from 'styled-components';

import { IoMdClose } from 'react-icons/io';

interface CloseIconProps {
  onClick: () => void;
}

export const CloseIcon = ({ onClick }: CloseIconProps) => {
  return <MdCloseIcon onClick={onClick} />;
};

const MdCloseIcon = styled(IoMdClose)`
  color: ${(props) => props.theme.white};

  font-size: 24px;

  cursor: pointer;
`;
