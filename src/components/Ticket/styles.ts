import styled from 'styled-components';
import colors, { getColumnColor } from '../../styles/colors';

type ContainerProps = {
  columnId: string;
};

type TextProps = {
  isEmpty: boolean;
  columnId: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${({ columnId }) => getColumnColor(columnId, 400)};
  padding: 2.4rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  text-align: center;
  max-width: 16rem;
  min-width: 16rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const DeleteTicketButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0.4rem;
  padding: 0.8rem;
  right: 0;
  line-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s;
  font-size: 1.6rem;
  cursor: pointer;

  & > span {
    color: ${colors.white};
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      color: ${colors.gray};
    }
  }

  ${Container}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const Text = styled.span<TextProps>`
  color: ${({ isEmpty, columnId }) =>
    isEmpty ? getColumnColor(columnId, 200) : colors.white};
`;
