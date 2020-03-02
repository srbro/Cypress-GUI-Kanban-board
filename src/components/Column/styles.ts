import styled from 'styled-components';
import colors, { getColumnColor } from '../../styles/colors';

type HeaderProps = {
  columnId: string;
};

type BodyProps = {
  columnId: string;
  draggedOver: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 23rem;
  width: 100%;

  color: ${colors.white};
`;

export const Separator = styled.div`
  display: block;
  height: 0.8rem;
`;

export const Header = styled.div`
  position: relative;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 4.8rem;
  margin-bottom: 0.4rem;
  background-color: ${({ columnId }: HeaderProps) =>
    getColumnColor(columnId, 600)};
`;

export const AddTicketButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.8rem;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 0.8rem;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 0.4rem;
  white-space: nowrap;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TicketCount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Body = styled.div`
  box-shadow: ${({ draggedOver }) =>
    draggedOver
      ? '0px 4px 10px 0px rgba(0, 0, 0, 0.3);'
      : '0px 2px 4px -1px rgba(0, 0, 0, 0.3);'}
  min-height: 40rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
  overflow: visible;
  transition: all 0.1s;
  background-color: ${({ columnId }: BodyProps) =>
    getColumnColor(columnId, 200)};
  opacity: ${({ draggedOver }: BodyProps) => (draggedOver ? '0.7' : '1')};
  transform: ${({ draggedOver }: BodyProps) =>
    draggedOver ? 'translateY(-4px)' : 'none'};
`;
