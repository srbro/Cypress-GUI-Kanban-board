import styled from 'styled-components';
import colors, { getColumnColor } from '../../styles/colors';

type HeaderProps = {
  columnId: string;
};

type BodyProps = {
  columnId: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
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
`;

export const TicketCount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Body = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1);
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
  background-color: ${({ columnId }: BodyProps) =>
    getColumnColor(columnId, 200)};
`;
