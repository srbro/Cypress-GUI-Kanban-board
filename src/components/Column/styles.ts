import styled from 'styled-components';
import colors from '../../styles/colors';

function getHeaderColor(id: string): string {
  if (id === 'todo') return colors.blue;
  if (id === 'inProgress') return colors.red;
  if (id === 'done') return colors.dark;
  return colors.white;
}

function getBodyColor(id: string): string {
  if (id === 'todo') return colors.bgBlue;
  if (id === 'inProgress') return colors.bgRed;
  if (id === 'done') return colors.bgDark;
  return colors.white;
}

type HeaderProps = {
  id: string;
};

type BodyProps = {
  id: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`;

export const Header = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ id }: HeaderProps) => getHeaderColor(id)};
  padding: 1.6rem 4.8rem;
  margin-bottom: 0.4rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

export const Body = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1);
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
  background-color: ${({ id }: BodyProps) => getBodyColor(id)};
`;
