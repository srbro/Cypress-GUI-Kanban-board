import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

import colors, { getColumnColor } from '../../styles/colors';

type TextareaProps = { columnid: string };

export const Textarea = styled(TextareaAutosize)`
  overflow: hidden;
  resize: none;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  font-size: 1.6rem;
  white-space: normal;
  color: ${colors.white};
  text-align: center;
  width: 100%;
  height: auto;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ columnid }: TextareaProps) => getColumnColor(columnid, 200)};
  }
  :-ms-input-placeholder {
    color: ${({ columnid }: TextareaProps) => getColumnColor(columnid, 200)};
  }
`;
