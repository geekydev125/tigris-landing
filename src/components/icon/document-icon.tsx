import styled from 'styled-components';

import { IoDocumentTextOutline } from 'react-icons/io5';

export const DocumentIcon = () => {
  return <IoDocumentTextOutlineIcon />;
};

export const IoDocumentTextOutlineIcon = styled(IoDocumentTextOutline)`
  font-size: 20px;

  color: ${(props) => props.theme.blue};
`;
